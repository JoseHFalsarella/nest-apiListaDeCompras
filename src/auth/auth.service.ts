import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/DTO/register-user.dto';
import { UserEntity } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) {
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
}
