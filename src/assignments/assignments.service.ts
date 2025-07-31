import { Injectable } from '@nestjs/common';
import { Assignment } from './entities/assignment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentsRepository: Repository<Assignment>,
  ) {}
    findAllByUserId(userId: number): Promise<Assignment[]> {
        return this.assignmentsRepository.find({ where: { userId } });
    }
}
