import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from '../service/user.service';

@Controller('users')
@ApiTags("Users")
export class UserController { 
    constructor(private userService: UserService) {}

    @ApiBearerAuth()
    @ApiOperation({ summary: "Get current user's details"})
    @Get('me')
    async currentUser(@Request() req) {
        const user = await this.userService.getUser(req.user['sub']);
        return user;
    }
}
