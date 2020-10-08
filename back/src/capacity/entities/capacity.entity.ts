import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('capacity')
export class Capacity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;
    
    @Column()
    level:number;

    @Column()
    description:string;

    @ManyToOne(type=>SubClass,
        (subClass)=>subClass.capacities)
    subClass:SubClass;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
