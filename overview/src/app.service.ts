import { Injectable } from '@nestjs/common';
// dd

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
