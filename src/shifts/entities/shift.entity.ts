import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    type: 'varchar',
    length: 255,
    nullable: false
  })
  location: string;
}