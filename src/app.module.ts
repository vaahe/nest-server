import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { PathModule } from './path/path.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { mongooseConfig } from './mongoose.config';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri),
    PathModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
