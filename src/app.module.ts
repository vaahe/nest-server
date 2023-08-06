import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { mongooseConfig } from './mongoose.config';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
