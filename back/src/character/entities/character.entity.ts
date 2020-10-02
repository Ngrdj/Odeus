import { CharacterCharacteristic } from "src/character-characteristic/entities/character-characteristic.entity";
import { CharacterClass } from "src/character-class/entities/character-class.entity";
import { Race } from "src/race/entities/race.entity";
import { Story } from "src/story/entities/story.entity";
import { User } from "src/user/entities/user.entity";
import { Column,CreateDateColumn,DeleteDateColumn,JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Alignement } from "../dto/alignement.enum";

export class Character {
    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    name:string;

    @JoinColumn()
    @ManyToOne(type=>Race,
        (race)=>race.characters)
    race:Race;

    @Column()
    level:number;

    @Column()
    masteryBonus:number;

    @Column()
    portrait:string;

    @Column()
    resume:string;

    @Column()
    alignement:Alignement;

    @JoinColumn()
    @OneToMany(type=>User,
        (user)=>user.characters)
    user:User;

    @JoinColumn()
    @OneToMany(type=>Story,
        (story)=>story.characters)
    story:Story;

    @OneToMany(type=>CharacterCharacteristic,
        (characterCharacteristic)=>characterCharacteristic.character)
        characterCharacteristics:CharacterCharacteristic[];

    @JoinColumn()
    @OneToMany(type=>CharacterClass,
        (characterClass)=>characterClass.character)
    characterClass:CharacterClass[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
