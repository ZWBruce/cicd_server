import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService as AppService1 } from './app1.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'website',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppService1],
})
export class AppModule {}
