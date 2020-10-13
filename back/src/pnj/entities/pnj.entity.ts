import { Exclude } from "class-transformer";
import { PnjCharacteristic } from "src/pnj-characteristic/entities/pnj-characteristic.entity";
import { PnjSkill } from "src/pnj-skill/entities/pnj-skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SizeEnum } from "../size.enum";

@Entity('pnj')
export class Pnj {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    name:string;

    @Column()
    size:SizeEnum;

    @Column()
    resume:string;

    @Column()
    portrait:string;

    @OneToMany(type=>PnjCharacteristic,
        (pnjCharacteristic)=>pnjCharacteristic.pnj,{
            eager:true
        })
    pnjCharacteristics:PnjCharacteristic[];

    @JoinColumn()
    @OneToMany(type=>PnjSkill,
        (pnjSkill)=>pnjSkill.pnj,{
            eager:true
        })
    pnjSkills:PnjSkill[];

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
