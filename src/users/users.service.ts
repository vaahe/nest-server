import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './create-user.dto';
import { UserModel } from './users.model';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  private generateUsername(name: string): string {
    return name.replace(/\s+/g, '').toLowerCase();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      if (!createUserDto.username) {
        createUserDto.username = this.generateUsername(createUserDto.username);
      }

      if (await this.userModel.findByUsername(createUserDto.username)) {
        throw new BadRequestException('Username already exists');
      }

      return this.userModel.createUser(createUserDto);
    } catch (error) {
      throw new Error('Failed to create a new user.');
    }
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.getAllUsers();

    if (!users || users.length == 0) {
      throw new NotFoundException('Users not found!');
    }

    return users;
  }

  // async getUser(userId: string): Promise<IUser> {
  //   const existingUser = await this.userModel.findById(userId).exec();

  //   if (!existingUser) {
  //     throw new NotFoundException(`User #${userId} not found`);
  //   }

  //   return existingUser;
  // }

  // async deleteUser(userId: string): Promise<IUser> {
  //   const deletedUser = await this.userModel.findByIdAndDelete(userId);

  //   if (!deletedUser) {
  //     throw new NotFoundException(`User #${userId} not found`);
  //   }

  //   return deletedUser;
  // }
}
