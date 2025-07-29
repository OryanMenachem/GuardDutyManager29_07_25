import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentsService {
    helloFromAssignments(): string {
        return 'Hello from Assignments!';
      }
}
