import { IsString } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  readonly startTime: string;

  @IsString()
  readonly endTime: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly location: string;
}
