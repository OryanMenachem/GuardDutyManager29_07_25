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

    async createShift(startTime: string, endTime: string, description: string, location: string): Promise<Shift> {
        const shift = this.shiftsRepository.create({
            startTime,
            endTime,
            description,
            location,
        });
        return await this.shiftsRepository.save(shift);
    }

    async updateShift(id: number, startTime: string, endTime: string, description: string, location: string): Promise<Shift> {
        const shift = await this.shiftsRepository.findOneBy({ id });
        if (!shift) {
            throw new Error('Shift not found');
        }
        shift.startTime = startTime;
        shift.endTime = endTime;
        shift.description = description;
        shift.location = location;
        return await this.shiftsRepository.save(shift);
    }

    async deleteShift(id: number): Promise<void> {
        await this.shiftsRepository.delete(id);
    }
}
