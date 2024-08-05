import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Todo } from './task/entities/task.entity';

@Module({
  imports: [ 
  ConfigModule.forRoot({
      isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    imports: [ ConfigModule ],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get<string>('DATABASE_HOST'),
      username: configService.get<string>('DATABASE_USER'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      database: configService.get<string>('DATABASE_NAME'),
      entities: [Todo,],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
  TaskModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
