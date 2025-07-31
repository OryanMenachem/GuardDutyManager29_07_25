
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

  
  async signUp(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username, password);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name, role : user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }



  async logIn(
    user: User
  ): Promise<{ access_token: string }> {
    const foundUser = await this.usersService.findOne(user.name, user.password);
    if (!foundUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: foundUser.id, username: foundUser.name, role: foundUser.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

