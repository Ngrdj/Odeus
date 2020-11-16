import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('context')
export class ContextScenario {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;
}
