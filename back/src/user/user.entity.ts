import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({nullable:true})
    name:string;

    @Column({nullable:true})
    status:string;

    @Column()
    login:string;

    @Column()
    password:string;

    @Column({nullable:true})
    salt:string;

    
    @OneToMany(type=>CharacterEntity,
        (character)=>character.user)
    characters:CharacterEntity;

}
