import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('twist')
export class TwistScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;
}
