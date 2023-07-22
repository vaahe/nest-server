import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  HttpCode,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { IUser } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  getAllUsers(@Req() request: Request, @Res() response: Response): Request {
    return request;
  }

  @Get(':id')
  @HttpCode(200)
  getUserById(@Param('id') id: string): string {
    return `This action returns user with ID: ${id}`;
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() user: IUser): Promise<string> {
    return 'This action create a new user';
  }

  @Put(':id')
  @HttpCode(200)
  updateUser(@Param('id') id: string): string {
    return `This action updates user with ID: ${id}`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return `This action deletes user with ID: ${id}`;
  }
}
