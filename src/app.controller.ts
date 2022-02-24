import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(`home`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`list`)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  PostHello(): string {
    return 'postHello';
  }

  @Put(`list/user`)
  updateUser(): string {
    return 'updateUser';
  }
  @Put(`list/:id`)
  update(): string {
    return 'update';
  }
}
