import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticleTitle(): string {
    return 'This is a placeholder title till I learn FS:D';
  }
}
