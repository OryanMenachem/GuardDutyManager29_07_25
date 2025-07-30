import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('assignment')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  userId: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  shiftId: number;
}