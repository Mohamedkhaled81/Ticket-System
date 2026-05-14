import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'john@example.com',
      role: 'IT',
    },
    {
      id: 2,
      email: 'sarah@example.com',
      role: 'USER',
    },
    {
      id: 3,
      email: 'mike@example.com',
      role: 'USER',
    },
    {
      id: 4,
      email: 'emma@example.com',
      role: 'IT',
    },
  ];

  findAll(role?: 'IT' | 'USER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    let id = this.users.length ? this.users[this.users.length - 1]["id"] + 1 : 1;
    console.log(id);
    const newUser = { id, ...createUserDto }
    this.users.push(newUser);
    return newUser;
  }

  update(userId: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === Number(userId)) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(userId);
  }

  delete(userId: number) {
    const deletedUser = this.findOne(userId);
    this.users = this.users.filter((user) => user.id !== userId);
    return deletedUser;
  }
}
