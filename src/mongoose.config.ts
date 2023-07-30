import { MongooseModuleOptions } from '@nestjs/mongoose';

// const USERNAME: string = process.env.USERNAME;
// const PASSWORD: string = process.env.PASSWORD;

console.log(process.env.DB_USERNAME);

export const mongooseConfig: MongooseModuleOptions = {
  uri: `link em xrgum dir stex`,
};
