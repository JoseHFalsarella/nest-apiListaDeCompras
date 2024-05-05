import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
//import { UserEntity } from "./user.entity";

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    quantity: number;
    @Column()
    status: boolean; 

    /*
    @ManyToOne(()=>UserEntity, (user) => user.item)
    user:UserEntity
    @Column()
    userId: number;
    */
}