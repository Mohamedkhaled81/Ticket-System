export class CreateUserDto {
    email!: string;
    role!: 'IT' | 'USER';
}