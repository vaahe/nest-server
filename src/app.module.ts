import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { PathModule } from './path/path.module';
import { AppController } from './app.controller';
// import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './mongoose.config';
import { User, UserSchema } from './users/users.schema';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    PathModule,
    // UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
