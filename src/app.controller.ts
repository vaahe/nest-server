import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() res: Response): Record<any, any> {
    const data = this.appService.getHello();
    console.log(data);
    return res.json(data);
  }
}
