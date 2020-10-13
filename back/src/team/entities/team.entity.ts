import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('team')
export class Team {
    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string

    @JoinTable()
    @ManyToMany(type=>Character,
        (character)=>character.teams,{
            eager:true
        })
    characters:Character[];

    @ManyToOne(type=>User,
        (user)=>user.team)
    user:User;

    @Exclude()
    @CreateDateColumn()
    createdAt: Date;

    @Exclude()
    @UpdateDateColumn()
    updatedAt: Date;

    @Exclude()
    @DeleteDateColumn()
    deletedAt: Date;

}
