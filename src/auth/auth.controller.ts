import { Controller, Get } from '@nestjs/common';
import { AuthService} from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHelloFromAuth(): string {
        return this.authService.getHelloFromAuth();
    }
}
