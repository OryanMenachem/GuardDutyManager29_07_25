import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shift } from './entities/shift.entity';

@Injectable()
export class ShiftsService {
    constructor(
        @InjectRepository(Shift)
        private readonly shiftsRepository: Repository<Shift>,
    ) {}

    async createShiftById(
        startTime: string, 
        endTime: string, 
        description: string, 
        location: string
    ): Promise<Shift> {
        const shift = this.shiftsRepository.create({
            startTime,
            endTime,
            description,
            location,
        });
        return await this.shiftsRepository.save(shift);
    }

    async findAllShifts(): Promise<Shift[]> {
        return await this.shiftsRepository.find();
    }

    async findShiftById(id: number): Promise<Shift | null> {
        return await this.shiftsRepository.findOneBy({ id });
    }
    async updateShiftById(
        id: number,
        updateShiftDto: Partial<Shift>
    ): Promise<Shift> {
        const shift = await this.shiftsRepository.findOneBy({ id });
        if (!shift) {
            throw new Error('Shift not found');
        }
        Object.assign(shift, updateShiftDto);
        return await this.shiftsRepository.save(shift);
    }

    async deleteShiftById(id: number): Promise<void> {
        await this.shiftsRepository.delete(id);
    }
}
