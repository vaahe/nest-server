import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  username: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly password: string;
}