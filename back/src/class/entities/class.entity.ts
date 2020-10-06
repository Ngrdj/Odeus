import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClassEnum } from "../class.enum";
@Entity('class')
export class Class {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:ClassEnum;

    @JoinColumn()
    @OneToMany(type=>SubClass,
        (subClass)=>subClass.class)
    subClass:SubClass[];

}
