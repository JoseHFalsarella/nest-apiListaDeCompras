/*
import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserEntity } from "src/Entity/user.entity";
import { Repository } from "typeorm";

export class JwtCustomStrategy extends PassportStrategy(Strategy){
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'LawdQ7LhdsabA2yulfWJGawutfQKJasdgj23ipvyufG'
        });
    }

    async validate(payload: {username: string}){
        const {username} = payload;

        const user = await this.repo.findOne({where:{username:username}});
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}
*/