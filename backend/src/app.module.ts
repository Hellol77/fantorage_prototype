import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGOOSE_CONNECT_STRING),
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
