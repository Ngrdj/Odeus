import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ally')
export class AllyScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;
}
