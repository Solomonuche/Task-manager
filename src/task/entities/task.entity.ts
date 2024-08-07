import { Base } from "src/entities/base.entity";
import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Todo extends Base {
    @Column({nullable: false})
    task: string;

}