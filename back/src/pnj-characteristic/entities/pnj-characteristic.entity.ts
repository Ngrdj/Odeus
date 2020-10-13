import { Exclude } from "class-transformer";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Pnj } from "src/pnj/entities/pnj.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pnj_characteristic')
export class PnjCharacteristic {

    @Exclude()
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @Column()
    bonus:number;

    @Exclude()
    @ManyToOne(type=>Pnj,
        (pnj)=>pnj.pnjCharacteristics)
    pnj:Pnj;

    @Exclude()
    @ManyToOne(type=>Characteristic,
        (characteristic)=>characteristic.pnjCharacteristics,{
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
