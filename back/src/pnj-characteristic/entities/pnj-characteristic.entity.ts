import { Exclude } from "class-transformer";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Pnj } from "src/pnj/entities/pnj.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pnj_characteristic')
export class PnjCharacteristic {

    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @Column()
    bonus:number;

    @Exclude()
    @ManyToOne(type=>Pnj,
        (pnj)=>pnj.pnjCharacteristics,{
            cascade:true
        })
    pnj:Pnj;

    @Exclude()
    @ManyToOne(type=>Characteristic,
        (characteristic)=>characteristic.pnjCharacteristics,{
            eager:true,
            cascade:true
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
