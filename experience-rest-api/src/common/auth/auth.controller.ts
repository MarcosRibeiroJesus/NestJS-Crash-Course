import { LoginUserDto } from './../../modules/users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post() 
    async login(@Body() loginUserDto: LoginUserDto){
        return await this.authService.validateUserByPassword(loginUserDto);
    }

}
