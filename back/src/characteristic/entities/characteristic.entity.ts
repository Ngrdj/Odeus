import { Exclude } from "class-transformer";
import { CharacterCharacteristic } from "src/character-characteristic/entities/character-characteristic.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('characteristic')
export class Characteristic {

    @Exclude()
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;


    @JoinColumn()
    @OneToMany(type=>CharacterCharacteristic,
        (characterCharacteristic)=>characterCharacteristic.characteristic)
    characterCharacteristics:CharacterCharacteristic[];

    @Exclude()
    @CreateDateColumn()
    createdAt: Date;

    @Exclude()
    @UpdateDateColumn()
    updatedAt: Date;

    @Exclude()
    @DeleteDateColumn()
    deletedAt: Date;
}
