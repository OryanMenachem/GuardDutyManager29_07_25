import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async addUser(name: string, password: string, role: string): Promise<User> {
    const user = this.usersRepository.create({ name, password, role });
    return this.usersRepository.save(user);
  } 

  
  async findOne(name: string, password: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { name, password } });
    return user === null ? undefined : user;
  }
  
}
