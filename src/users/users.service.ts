import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHelloFromUsers(): string {
        return 'Hello from users';
    }
}
