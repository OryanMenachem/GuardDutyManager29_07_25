import { Controller, Get } from '@nestjs/common';
import {ShiftsService} from './shifts.service'

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftsService : ShiftsService ) {}

    @Get()
    getHelloFromShifts(): string {
        return this.shiftsService.getHelloFromShifts();
    }
}
