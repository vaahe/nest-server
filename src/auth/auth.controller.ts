import { Request as Req } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('/signin')
    async login(@Request() req: Req) {
        return this.authService.login(req.user);
    }
}