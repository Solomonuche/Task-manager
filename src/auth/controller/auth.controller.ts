import { Body, Controller, Post, Get, UsePipes, ValidationPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginDto } from 'src/users/dto/users.dto';
import { AuthService } from '../service/auth.service';
import { SkipAuth } from 'src/decorators/skipAuth.decorator';

@UsePipes(ValidationPipe)
@SkipAuth()
@Controller('auth')
@ApiTags("Auth")
export class AuthController {
    constructor(private authService: AuthService ) {}

    @Post('register')
    @ApiOperation({ summary: 'Create account'})
    register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Post('Login')
    @ApiOperation({ summary: 'Login'})
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
