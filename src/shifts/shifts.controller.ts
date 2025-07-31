import { Controller, Post, Body, Get, Param, Put, ParseIntPipe } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import {CreateShiftDto} from './dto/create-shift.dto';
import {UpdateShiftDto} from './dto/update-shift.dto';

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
        @Body() createShiftDto: CreateShiftDto
    ) {
        const { startTime, endTime, description, location } = createShiftDto;
        return await this.shiftsService.createShiftById(startTime, endTime, description, location);
    }


    @Get()
    async findAllShifts() {
        return await this.shiftsService.findAllShifts();
    }

    @Get(':id')
    async findShiftById(@Param('id', ParseIntPipe) id: number) {
        
        if (isNaN(id)) {
            throw new Error('Invalid shift id');
        }
        return await this.shiftsService.findShiftById(id);
    }

    @Put(':id')
    async updateShiftById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateShiftDto: UpdateShiftDto
    ) {
        if (isNaN(id)) {
            throw new Error('Invalid shift id');
        }
        return await this.shiftsService.updateShiftById(id, updateShiftDto);
    }

    @Post('delete/:id')
    async deleteShiftById(@Param('id') id: string) {
        const shiftId = parseInt(id, 10);
        if (isNaN(shiftId)) {
            throw new Error('Invalid shift id');
        }
        await this.shiftsService.deleteShiftById(shiftId);
        return { message: 'Shift deleted successfully' };
    }


    
}
