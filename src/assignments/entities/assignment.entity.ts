import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Shift } from 'src/shifts/entities/shift.entity';
import { User } from 'src/users/entities/users.entity';


@Entity('assignment')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  // Reference to the user entity (Many-to-One). Deleting a user will also delete related assignments.
  @ManyToOne(() => User, (user) => user.assignments, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // Foreign key: user ID
  @Column({ type: 'int' })
  userId: number;

  // Reference to the shift entity (Many-to-One). Deleting a shift will also delete related assignments.
  @ManyToOne(() => Shift, (shift) => shift.assignments, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'shiftId' })
  shift: Shift;

  // Foreign key: shift ID
  @Column({ type: 'int' })
  shiftId: number;  
}