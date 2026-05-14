import { Controller, Get, Param, Delete, Patch, Body, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { type ITicket } from './interface/ticketsInterface';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) {}

  @Get()
  getTickets(): ITicket[] {
    return this.ticketService.getAllTickets();
  }

  @Get(':id')
  getOneTicket(@Param('id') id: string): ITicket | string{
    const ticket = this.ticketService.getOneTicket(id);
    if(!ticket){return 'Ticket Not Found'}
    return ticket;
  }

  @Delete(':id')
  deleteTicket(@Param('id') id: string): string  {
    const ticket = this.ticketService.deleteTicket(id);
    if(!ticket) {return 'Ticket Not Found'}
    return 'Ticket Deleted'
  }

  @Patch(':id')
  updateTicket(@Param('id') id: string, @Body() newTicket: Partial<ITicket>): ITicket | string {
    const ticket = this.ticketService.updateTicket(id, newTicket)
    if(!ticket) {return 'Ticket Not Found'}
    return ticket
  }

  @Post()
  createTicket(@Body() newTicket: ITicket): ITicket {
    return this.ticketService.addTicket(newTicket);
  }
}
