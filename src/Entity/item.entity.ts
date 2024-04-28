import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}