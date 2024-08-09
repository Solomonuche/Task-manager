import { Exclude } from "class-transformer";
import { Base } from "src/entities/base.entity";
import { Todo } from "src/task/entities/task.entity";
import {
    Entity,
    Column,
    OneToMany,
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

    @OneToMany(type => Todo, task => task.user)
    tasks: Todo[]

    constructor(partial: Partial<Users>) {
        super();
        Object.assign(this, partial)
    }
}