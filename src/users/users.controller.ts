import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
// import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signup')
    async createUser(@Body('password') password: string, @Body('username') username: string): Promise<User> {
        const result = await this.usersService.createUser(
            username,
            password,
        );

        return result;
    }
}