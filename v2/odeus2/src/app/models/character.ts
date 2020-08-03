import { CharacterRaceEnum } from './characterRaceEnum';
import { CharacterClassEnum } from './characterClassEnum';
import { Characteristic } from './interfaces/characteristic';
import { Skill } from './interfaces/skill';

export class Character{

   public  initiative:number = 0;
   

    constructor(

        public name : string,
        public race : string,
        public charClass: string,
        public level: number,
        public masteryBonus:number,
        public skills:Skill[]=[],
        public portrait : string = 'default.jpg',
        public characteristics:Characteristic[]=[
         {
            "name":"strength",
            "value":10,
            "bonus":0
        },
         {
            "name":"dexterity",
            "value":10,
            "bonus":0
        },
        {
            "name":"constitution",
            "value":10,
            "bonus":0
        },
        {
            "name":"intelligence",
            "value":10,
            "bonus":0
        },
        {
            "name":"wisdom",
            "value":10,
            "bonus":0
        },
        {
            "name":"charisma",
            "value":10,
            "bonus":0
        }

        ],
        public resume:string,
        public id:number,
        public attitude:string,
        public owner:string

    )
    {
      if(Object.values(CharacterClassEnum).includes(this.charClass)){

         this.setClassTraits(this.charClass);
       
      }
      if(Object.values(CharacterRaceEnum).includes(this.race)){

         this.setRacialTraits(this.race);
      }

    }
   addBonusToSkills(){
      this.skills.forEach(skill=>{
         skill.value+=this.characteristics.find(chara=>skill.type===chara.name).bonus;
         if(skill.isCheked){
            skill.value+=this.masteryBonus;
         }
      })
   }
   setClassTraits(className:string){

      switch(className){

          case 'ARTIFICER' : 

              break;

          case 'BARBARIAN' : 

              break;

          case 'BARD' : 

              break;

          case 'CLERIC' : 

              break;
              
          case 'DRUID' : 

              break;
              
          case 'FIGHTER' : 

              break;

          case 'MONK' : 

              break;

          case 'PALADIN' : 

              break;

          case 'RANGER' : 

              break;
              
          case 'ROGUE' : 

              break;

          case 'SORCERER' : 

              break;

          case 'WARLOCK' : 

              break;

          case 'WARRIOR' : 

              break;

          case 'WIZARD' : 

              break;

      }

  }
  setRacialTraits(raceName:string){

   switch(raceName){

       case 'AARAKOCRA' : 

           break;

       case 'AASIMAR' : 

           break;

       case 'AETHERBORN' : 

           break;

       case 'BUGBEAR' : 

           break;
           
       case 'CENTAUR' : 

           break;
           
       case 'CHANGELING' :

           break;

       case 'DRAGONBORN' : this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="strength")].value+=2;
                           this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="charisma")].value+=1;

           break;

       case 'DWARF' : this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="constitution")].value+=2;
                      this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="strength")].value+=2;

           break;

       case 'WOOD-ELF' : this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="dexterity")].value+=2;
                         this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="wisdom")].value+=1;

           break;

       case 'DROW' :

           break;

       case 'HIGH-ELF' :

           break;
           
       case 'FIRBOLG' : 

           break;

       case 'GENASI' : 

           break;

       case 'GITH' : 

           break;

       case 'GNOME' : 

           break;

       case 'GOBLIN' : 

           break;
           
       case 'GOLIATH' : 

           break;

       case 'HALF-ELF' : 

           break;

       case 'HALF-ORC' : 

           break;

       case 'HALFLING' : this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="dexterity")].value+=2;
                         this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="constitution")].value+=1;

           break;

       case 'HOBGOBLIN' : 

           break;
           
       case 'HUMAN' : 

           break;

       case 'KENKU' : 

           break;

       case 'KOBOLD' : 

           break;

       case 'KOR' : 

           break;

       case 'LIZARDFOLK' : 

           break;
           
       case 'LOXODON' : 

           break;

       case 'MERFOLK' : 

           break;

       case 'MINOTAUR' : 

           break;

       case 'ORC' : 

           break;

       case 'SHIFTER' : 

           break;
           
       case 'SIMIC HYBRID' : 

           break;

       case 'TABAXI' : 

           break;

       case 'TIEFLING' : this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="charisma")].value+=2;
                         this.characteristics[this.characteristics.findIndex(characteristic=>characteristic.name="intelligence")].value+=1;

           break;

       case 'TRITON' : 

           break;

       case 'VAMPIRE' : 

           break;
           
       case 'VEDALKEN' : 

           break;

       case 'WARFORGED' : 

           break;

       case 'YUAN-TI' : 

   }

}
}