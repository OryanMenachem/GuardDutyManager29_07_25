import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftsService {

    getHelloFromShifts(): string {
        return 'Hello from ShiftsService!';
    }
}
