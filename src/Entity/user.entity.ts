import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemEntity } from "./item.entity";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    salt: string;

    @OneToMany(()=>ItemEntity, (item) => item.user)
    item: ItemEntity[];
}