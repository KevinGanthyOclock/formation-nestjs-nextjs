import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly entityRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.entityRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.entityRepository.findOneBy({ id });
  }

  async create(entity: User): Promise<User> {
    return this.entityRepository.save(entity);
  }

  async update(id: number, entity: User): Promise<User> {
    await this.entityRepository.update(id, entity);
    return this.entityRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.entityRepository.delete(id);
  }
}
