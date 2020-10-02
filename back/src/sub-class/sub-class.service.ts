import { Injectable } from '@nestjs/common';
import { CreateSubClassDto } from './dto/create-sub-class.dto';
import { UpdateSubClassDto } from './dto/update-sub-class.dto';

@Injectable()
export class SubClassService {
  create(createSubClassDto: CreateSubClassDto) {
    return 'This action adds a new subClass';
  }

  findAll() {
    return `This action returns all subClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subClass`;
  }

  update(id: number, updateSubClassDto: UpdateSubClassDto) {
    return `This action updates a #${id} subClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} subClass`;
  }
}
