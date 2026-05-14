import { Injectable } from '@nestjs/common';
import { ITicket } from './interface/ticketsInterface';
import { Priority, Status } from './enums/ticketsEnums';

@Injectable()
export class TicketsService {
    private ticketsData: ITicket[] = [
        {
            id: "1",
            title: "Login page bug",
            description: "Users cannot log in with valid credentials",
            status: Status.OPEN,
            priority: Priority.HIGH,
            reporter: "Basem",
            assignee: "Yasmein",
            createdAt: "2026-05-01T10:00:00Z",
            updatedAt: "2026-05-01T10:00:00Z",
        },
        {
            id: "2",
            title: "Improve dashboard UI",
            description: "Redesign dashboard for better UX",
            status: Status.OPEN,
            priority: Priority.HIGH,
            reporter: "Mohamed",
            assignee: "Ali",
            createdAt: "2026-04-28T14:30:00Z",
            updatedAt: "2026-05-02T09:00:00Z",
        },
        {
            id: "3",
            title: "API performance issue",
            description: "Slow response time on /vehicles endpoint",
            status: Status.OPEN,
            priority: Priority.HIGH,
            reporter: "Sara",
            assignee: "Omar",
            createdAt: "2026-04-25T08:15:00Z",
            updatedAt: "2026-04-25T08:15:00Z",
        },
        {
            id: "4",
            title: "Fix typo in landing page",
            description: "Spelling mistake in hero section",
            status: Status.OPEN,
            priority: Priority.HIGH,
            reporter: "Nour",
            assignee: "Laila",
            createdAt: "2026-04-20T12:00:00Z",
            updatedAt: "2026-04-21T10:00:00Z",
        }
    ];

    getAllTickets(): ITicket[] {
        return this.ticketsData;
    }

    getOneTicket(ticketId: string): ITicket | undefined {
        return this.ticketsData.find((ticket) => ticket.id === ticketId);
    }

    updateTicket(ticketId: string, newTicket: Partial<ITicket>): ITicket | null {
        const ticket = this.getOneTicket(ticketId);
        if (!ticket) return null;

        const updatedTicket: ITicket = {
            ...ticket,
            ...newTicket,
            updatedAt: new Date().toISOString(),
        };

        this.ticketsData = this.ticketsData.map((t) =>
            t.id === ticketId ? updatedTicket : t
        );

        return updatedTicket;
    }

    deleteTicket(ticketId: string) {
        const ticket = this.getOneTicket(ticketId);
        if (!ticket) { return null }
        this.ticketsData = this.ticketsData.filter((ticket) => ticket.id !== ticketId);
        return ticket;
    }

    addTicket(newTicket: ITicket): ITicket {
        this.ticketsData.push(newTicket);
        return newTicket;
    }
}
