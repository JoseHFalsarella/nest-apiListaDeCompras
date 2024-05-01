import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/DTO/register-user.dto';
import { UserLoginDto } from 'src/DTO/user-login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    registration(@Body(ValidationPipe) regDto: RegisterUserDto){
        return this.authService.registerUser(regDto);
    }

    @Post('login')
    signin(@Body(ValidationPipe) loginDto: UserLoginDto){
        return this.authService.loginUser(loginDto);
    }
}
