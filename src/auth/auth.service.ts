import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/DTO/register-user.dto';
import { UserEntity } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from 'src/DTO/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,
    private jwt: JwtService) {
    }

    async registerUser(registerDto: RegisterUserDto){
        const {username, password} = registerDto;
        const hashedPassword = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashedPassword);

        const user = new UserEntity();
        user.username = username;
        user.password = hashedPassword;
        user.salt = salt;

        this.repo.create(user);

        try {
            return await this.repo.save(user);
        } catch(err) {
            throw new InternalServerErrorException('Algo deu errrado.');
        }
        
    }

    async loginUser(userLoginDto: UserLoginDto) {
        const {username, password} = userLoginDto;

        const user = await this.repo.findOne({ where: { username: username } });
        
        if(!user) {
            throw new UnauthorizedException('Credenciais Inválidas.');
        }
        const salt = user.salt;
        const isPassword = await bcrypt.compare(password, user.password);

        if(isPassword) {
            const jwtPayload = {username};
            const jwtToken = await this.jwt.signAsync(jwtPayload, {expiresIn: '1d', algorithm: 'HS512'});
            return {token: jwtToken};
        } else {
            throw new UnauthorizedException('Credenciais Inválidas.');
        }
    }
}
