import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Assignment } from '../../assignments/entities/assignment.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    default: 'user'
  })
  role: string;

  @OneToMany(() => Assignment, (assignment) => assignment.userId)
  assignments: Assignment[];

}