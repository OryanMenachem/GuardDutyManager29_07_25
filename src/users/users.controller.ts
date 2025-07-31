import { Controller, Get, Post, Body,  Headers, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service'
import {AuthService} from '../auth/auth.service';

/**
* curl -X POST http://localhost:3000/users \
* -H "Content-Type: application/json" \
*    -d '{"name": "user1", "password": "pass123", "role": "user"}'
*/
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService : UsersService, 
        private readonly authService: AuthService
    ) {}

    @Post('signup')
    async signup(
        @Body('name') name: string,
        @Body('password') password: string,
        @Body('role') role: string
    ) {
        return this.usersService.addUser(name, password, role);
    }
    /**
    * curl -X POST http://localhost:3000/users/login \
    * -H "Content-Type: application/json" \
    * -H "Authorization: Bearer ...." \
    * -d '{"name": "user1", "password": "pass123"}'
    */
    @Post('login')
    async login(
        @Body('name') name: string,
        @Body('password') password: string,
        @Headers('authorization') authHeader: string
    ) {
        // If there is an Authorization header, check if the token is valid
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.replace('Bearer ', '').trim();
            try {
                const decoded = await this.authService.validateToken(token);
                const user = await this.usersService.findOne(name, password);
                if (!user) {
                    return { message: 'Invalid credentials' };
                }
                return { message: 'Login successful', user, tokenInfo: decoded };
            } catch (err) {
                throw new UnauthorizedException('Invalid or expired token');
            }
        } else {

            const user = await this.usersService.findOne(name, password);
            if (!user) {
                return { message: 'Invalid credentials' };
            }
            // Token creation
            const { access_token } = await this.authService.logIn(user);
            return { message: 'Login successful', user, access_token };
        }
    }

}
