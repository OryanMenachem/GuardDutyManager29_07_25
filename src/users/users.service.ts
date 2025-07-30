// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './entities/users.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   async addUser(name: string): Promise<User> {
//     const user = this.usersRepository.create({ name });
//     return this.usersRepository.save(user);
//   }

//   async getAllUsers(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   async findOne(username: string): Promise<User | undefined> {
//     return this.usersRepository.findOne({ where: { name: username } });
//   }
// }
