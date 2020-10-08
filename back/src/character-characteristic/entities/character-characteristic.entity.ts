import { Character } from "src/character/entities/character.entity";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('characterCharacteristic')
export class CharacterCharacteristic {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @Column()
    bonus:number;

    @ManyToOne(type=>Character,
        (character)=>character.characterCharacteristics)
    character:Character;

    @ManyToOne(type=>Characteristic,
        (characteristic)=>characteristic.characterCharacteristics,{
            eager:true
        })
    characteristic:Characteristic;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
