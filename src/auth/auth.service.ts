import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<IUser> {
    const user: IUser = await this.usersService.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { ...result } = user;

    return result;
  }
}
