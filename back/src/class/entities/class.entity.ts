import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
