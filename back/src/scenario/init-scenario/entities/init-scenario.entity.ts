import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('init')
export class InitScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;

}
