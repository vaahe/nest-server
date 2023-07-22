import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PathModule } from './path/path.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), PathModule, UsersModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
