import { MongooseModuleOptions } from '@nestjs/mongoose';

const USERNAME: string = process.env.USERNAME;
const PASSWORD: string = process.env.PASSWORD;

export const mongooseConfig: MongooseModuleOptions = {
  uri: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.yeok26c.mongodb.net/?retryWrites=true&w=majority`,
};
