import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../service/user.service';

@Controller('users')
@ApiTags("Users")
export class UserController { 
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: "Get user's details"})
    @Get('me')
    userDetails(id: string) {
        return this.userService.getUser(id)
    }
}
