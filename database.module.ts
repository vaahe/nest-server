import { Module } from '@nestjs/common';
import { mongooseConfig } from 'mongoose.config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/auth/user.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => mongooseConfig,
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
      },
    ]),
  ],
})
export class DataBaseModule {}
