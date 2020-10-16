import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PnjCharacteristicService } from 'src/pnj-characteristic/pnj-characteristic.service';
import { PnjSkill } from 'src/pnj-skill/entities/pnj-skill.entity';
import { PnjSkillService } from 'src/pnj-skill/pnj-skill.service';
import { SkillService } from 'src/skill/skill.service';
import { Repository } from 'typeorm';
import { CreatePnjDto } from './dto/create-pnj.dto';
import { UpdatePnjDto } from './dto/update-pnj.dto';
import { Pnj } from './entities/pnj.entity';

@Injectable()
export class PnjService {
  constructor(
    @InjectRepository(Pnj) 
    private readonly pnjRepository:Repository<Pnj>,
    private pnjCharacteristicService:PnjCharacteristicService,
    private pnjSkillService:PnjSkillService,
    private skillService:SkillService
  ){}
  async create(createPnjDto: CreatePnjDto) {

    const newPnj= new Pnj();
    const skills= await this.skillService.findAll();

    newPnj.pnjCharacteristics=[];
    newPnj.pnjSkills=[];
    newPnj.name=createPnjDto.name;
    newPnj.size=createPnjDto.size;
    newPnj.resume=createPnjDto.resume;
    newPnj.portrait=createPnjDto.portrait;
    newPnj.type=createPnjDto.type;


    const createPnjCharacteristics=[
      createPnjDto.strength,
      createPnjDto.dexterity,
      createPnjDto.constitution, 
      createPnjDto.intelligence,
      createPnjDto.wisdom,
      createPnjDto.charisma
    ];

    for (const [i,createPnjCharacteristic] of createPnjCharacteristics.entries()) {

      const pnjCharacteristics= await this.pnjCharacteristicService.create({
        value:createPnjCharacteristic[i],
        characteristicId:createPnjCharacteristic[i].id
      })
      newPnj.pnjCharacteristics.push(pnjCharacteristics)
      
    }
    await this.pnjRepository.save(newPnj);
    //-----------------------------------------------------------------------------------
    const newpnjCharacteristics= await this.pnjCharacteristicService.findAllByPnj(newPnj)


    
    for (let skill of skills) {

      for (const pnjskill of createPnjDto.skills) {
        if(skill.name===pnjskill.name){
          const skillpnj= new PnjSkill();
          skillpnj.isChecked=true;
          skillpnj.skill=skill;
    
          for (const newpnjCharacteristic of newpnjCharacteristics) {

            if(skill.type===newpnjCharacteristic.characteristic.name){

              skillpnj.bonus=newpnjCharacteristic.bonus;
  
            }

          }
           await this.pnjSkillService.create(skillpnj)
           newPnj.pnjSkills.push(skillpnj)
        }

      }
      
      
      

    }
    



    return this.pnjRepository.save(newPnj)
  }

  findAll() {
    return this.pnjRepository.find();
  }

  findOne(id: number) {
    return this.pnjRepository.findOne(id);
  }

  update(id: number, updatePnjDto: UpdatePnjDto) {
    return `This action updates a #${id} pnj`;
  }

  remove(id: number) {
    return `This action removes a #${id} pnj`;
  }
}
