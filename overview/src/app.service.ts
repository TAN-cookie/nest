import { Injectable } from '@nestjs/common';
// dd

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi Nest!';
  }
}
