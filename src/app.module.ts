import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import {User} from './users/entities/users.entity'
import { Shift } from './shifts/entities/shift.entity';
import { Assignment } from './assignments/entities/assignment.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ShiftsModule,
    AssignmentsModule,
 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shifts',
      // autoLoadEntities: true,
      entities:[User,Shift, Assignment],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
