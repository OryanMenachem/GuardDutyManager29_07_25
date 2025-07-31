import { Controller, Post, Body } from '@nestjs/common';
import { ShiftsService } from './shifts.service';

@Controller('shifts')
export class ShiftsController {
    constructor(
        private readonly shiftsService: ShiftsService
    ) {}

    /**
     * curl -X POST http://localhost:3000/shifts/add -H "Content-Type: application/json" -d '{"startTime":"2024-06-01T08:00:00Z","endTime":"2024-06-01T16:00:00Z","description":"Morning shift","location":"Tel Aviv"}'
     */

    @Post('add')
    async createShift(
        @Body('startTime') startTime: string,
        @Body('endTime') endTime: string,
        @Body('description') description: string,
        @Body('location') location: string
    ) {
        if (!startTime) {
            throw new Error('startTime is required');
        }
        if (!endTime) {  
            throw new Error('endTime is required');
        }
        if (!description) {
            throw new Error('description is required');
        }
        if (!location) {
            throw new Error('location is required');
        }
        return await this.shiftsService.createShift(startTime, endTime, description, location);
    }
}
