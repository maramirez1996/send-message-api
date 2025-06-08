import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notification/notification.module';


@Module({
  imports: [
 TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Daya2000',
  database: 'notification_db',
  autoLoadEntities: true,
  synchronize: true,
}),
  NotificationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
