import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Todo } from './task/entities/task.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entites/user.entity';
import { AuthModule } from './auth/auth.module';

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
      entities: [Todo, Users],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
  TaskModule,
  UsersModule,
  AuthModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
