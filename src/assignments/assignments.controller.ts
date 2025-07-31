import { Controller, Get, Param } from '@nestjs/common';
import {AssignmentsService} from './assignments.service';
import { Assignment } from './entities/assignment.entity';



// GET http://localhost:3000/assignments
@Controller('assignments')
export class AssignmentsController {

     constructor(private readonly assignmentsService : AssignmentsService ) {}

     @Get(':id')
     async getAssignmentsByUserId(@Param('id') id: string): Promise<Assignment[]> {
         const userId = parseInt(id, 10);
         return this.assignmentsService.findAllByUserId(userId);
     }
     
}
