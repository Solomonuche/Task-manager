import { Exclude } from "class-transformer";
import { Base } from "src/entities/base.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Users extends Base {    
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    email: string;
    
    @Column()
    @Exclude()
    password: string;

    constructor(partial: Partial<Users>) {
        super();
        Object.assign(this, partial)
    }
}