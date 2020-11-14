
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bonus')
export class BonusScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;
}
