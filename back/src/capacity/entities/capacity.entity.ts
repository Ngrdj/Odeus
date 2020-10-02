import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

}
