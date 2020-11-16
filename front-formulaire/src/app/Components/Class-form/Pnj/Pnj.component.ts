import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeEnum } from 'src/app/Enum/type.enum';
import { Skill } from 'src/app/Models/skill.model';
import { SkillService } from 'src/app/Services/skill.service';

@Component({
  selector: 'app-Pnj',
  templateUrl: './Pnj.component.html',
  styleUrls: ['./Pnj.component.scss']
})
export class PnjComponent implements OnInit {

  public pnjForm:FormGroup;
  public skills:Skill[]=[];
  public sizes:string[];
  public types:string[];

  constructor(private formBuilder:FormBuilder,
              private skillService:SkillService) { 

    this.sizes=["TP","P",'M','G','TG','GiG'];
    this.types=[
      'HUMANOID',
      'ABERRATION',
      'BEAST',
      'CELESTIAL',
      'CONSTRUCT',
      'DRAGON',
      'ELEMENTAL',
      'FEY',
      'FIEND',
      'GIANT',
      'MONSTROSITY',
      'OOZE',
      'PLANT',
      'UNDEAD'
    ];

    this.pnjForm=formBuilder.group({
      name:formBuilder.control(''),
      size:formBuilder.control(''),
      strength:formBuilder.control(''),
      dexterity:formBuilder.control(''),
      constitution:formBuilder.control(''),
      intelligence:formBuilder.control(''),
      wisdom:formBuilder.control(''),
      charisma:formBuilder.control(''),
      skills:formBuilder.control(''),
      resume:formBuilder.control(''),
      portrait:formBuilder.control(''),
      type:formBuilder.control('')
    })

  }

  ngOnInit() {
    this.getAllSkills()
  }

  private getAllSkills():void{

    this.skillService.getAllSkills().subscribe(
      (skills) => {
        skills.forEach((skill)=>{
          this.skills.push(skill)
        })
        
      }
    ) 
  }
  
  OnSubmitForm(){
    
  }
}
