import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    task: string;

    @CreateDateColumn()
    created_at: string;
    
    @UpdateDateColumn()
    updated_at: string;

}