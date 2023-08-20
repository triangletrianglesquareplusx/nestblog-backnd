import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModuleModule } from './blog-module/blog-module.module';

@Module({
  imports: [BlogModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
