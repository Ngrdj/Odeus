import { Injectable } from '@nestjs/common';
import { CreatePnjDto } from './dto/create-pnj.dto';
import { UpdatePnjDto } from './dto/update-pnj.dto';

@Injectable()
export class PnjService {
  create(createPnjDto: CreatePnjDto) {
    return 'This action adds a new pnj';
  }

  findAll() {
    return `This action returns all pnj`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pnj`;
  }

  update(id: number, updatePnjDto: UpdatePnjDto) {
    return `This action updates a #${id} pnj`;
  }

  remove(id: number) {
    return `This action removes a #${id} pnj`;
  }
}
