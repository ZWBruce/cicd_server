import { Injectable } from '@nestjs/common';
import { AppService as AppService1 } from './app1.service'

@Injectable()
export class AppService {
  constructor(public a: AppService1) {
    console.log('xxxx', a);
  }
  getHello(): string {
    return 'Hello World, CI CD!';
  }
}
