import { Controller, Get } from '@nestjs/common';
import {AssignmentsService} from './assignments.service';



// GET http://localhost:3000/assignments
@Controller('assignments')
export class AssignmentsController {

     constructor(private readonly assignmentsService : AssignmentsService ) {}

     @Get()
     helloFromAssignments(): string {
          return this.assignmentsService.helloFromAssignments();
        }
     
}
