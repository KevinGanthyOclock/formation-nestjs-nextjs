import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly entityService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.entityService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    return this.entityService.findById(id);
  }

  @Post()
  async create(@Body() entity: User): Promise<User> {
    return this.entityService.create(entity);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() entity: User): Promise<User> {
    return this.entityService.update(id, entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.entityService.delete(id);
  }
}
