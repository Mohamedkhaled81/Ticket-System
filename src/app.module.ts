import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './modules/tickets/tickets.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TicketsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
