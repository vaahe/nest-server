import { Module } from "@nestjs/common"
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose"
import { PassportModule } from "@nestjs/passport"

import { AuthService } from "./auth.service"
import { LocalStrategy } from './local.auth';
import { UserSchema } from "../users/users.model";
import { AuthController } from "./auth.controller";
import { UserModule } from "../users/user.module";
import { UsersService } from "../users/users.service";


@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: '3ierwogu34890unowey984',
        signOptions: { expiresIn: '600s' },
    }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
    providers: [AuthService, UsersService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule { }