import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('enemy')
export class EnemyScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;
}
