import { Controller, Post, Body } from '@nestjs/common';
import { ShiftsService } from './shifts.service';

@Controller('shifts')
export class ShiftsController {
    constructor(
        private readonly shiftsService: ShiftsService
    ) {}

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
