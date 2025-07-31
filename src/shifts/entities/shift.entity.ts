import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Assignment } from '../../assignments/entities/assignment.entity';

@Entity('shift')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'time',
    nullable: false
  })
  startTime: string;

  @Column({
    type: 'time',
    nullable: false
  })
  endTime: string;

  @Column({
    type: 'text',
    nullable: false
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  location: string;

  @OneToMany(() => Assignment, (assignment) => assignment.shiftId)
  assignments: Assignment[];
}