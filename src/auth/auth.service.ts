
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/users.entity';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  
  // validate the token
  async validateToken(token: string): Promise<any> {
    try {
      // verify checks the validity of the token and decodes it
      const decoded = await this.jwtService.verifyAsync(token);
      return decoded;
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  
  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username, pass);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name, role : user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }



  async login(
    user: User
  ): Promise<{ access_token: string }> {
    const foundUser = await this.usersService.findOne(user.name, user.password);
    if (!foundUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: foundUser.id, username: foundUser.name, role: foundUser.role };
    console.log('Payload before signing:', payload);
    console.log('Type:', typeof payload);
    console.log(this.jwtService);

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

