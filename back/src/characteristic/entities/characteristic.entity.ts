import { CharacterCharacteristic } from "src/character-characteristic/entities/character-characteristic.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('characteristic')
export class Characteristic {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;


    @JoinColumn()
    @OneToMany(type=>CharacterCharacteristic,
        (characterCharacteristic)=>characterCharacteristic.characteristic)
    characterCharacteristics:CharacterCharacteristic[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
