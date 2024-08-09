import { Base } from "src/entities/base.entity";
import { Users } from "src/users/entites/user.entity";
import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

@Entity()
export class Todo extends Base {
    @Column({nullable: false})
    task: string;

    @ManyToOne(type => Users, user => user.tasks)
    @JoinColumn()
    user: Users
}