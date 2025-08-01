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

  async createUser(
    name: string,
    password: string,
    role: string
  ): Promise<User> {
    const user = this.usersRepository.create({ name, password, role });
    return await this.usersRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findUserById(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findByCredentials(
    name: string,
    password: string
  ): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
      where: { name, password }
    });
    return user === null ? undefined : user;
  }
  async updateUserById(
    id: number,
    updateUserDto: Partial<User>
  ): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async deleteUserById(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
