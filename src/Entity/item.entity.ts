import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    quantity: number;
    @Column()
    status: boolean; 
}