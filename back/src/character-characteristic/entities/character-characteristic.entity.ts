import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('characterCharacteristic')
export class CharacterCharacteristic {

    @Exclude()
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @Column()
    bonus:number;

    @Exclude()
    @ManyToOne(type=>Character,
        (character)=>character.characterCharacteristics)
    character:Character;

    @Exclude()
    @ManyToOne(type=>Characteristic,
        (characteristic)=>characteristic.characterCharacteristics,{
            eager:true
        })
    characteristic:Characteristic;

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
