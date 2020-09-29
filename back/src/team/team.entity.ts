import { CharacterEntity } from "src/character/character.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('team')
export class TeamEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @JoinColumn()
    @ManyToOne(type=>UserEntity,
        (owner)=>owner.teams)
    owner:UserEntity;

    @JoinTable()
    @ManyToMany(type=>CharacterEntity,
        (character)=>character.teams)
    characters:CharacterEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    
}
