import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginDto } from 'src/users/dto/users.dto';
import { UserService } from 'src/users/service/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async register(createUserDto: CreateUserDto) {

        const userExist = await this.userService.findUserByEmail(createUserDto.email);

        if (userExist) {
            throw new BadRequestException('User with this email already exist');
        }
        return this.userService.createUser(createUserDto);
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findUserByEmail(email);

        if (!user) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const isMatch = await this.userService.verifyPassword(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException("Invalid credentials");
        }

        // Generate token
        const payload = {sub: user.id, email: user.email};

        return {
            message: 'Login successful',
            access_token: await this.jwtService.signAsync(payload),
            user
        };
    }
}
