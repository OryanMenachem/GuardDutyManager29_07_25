import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  @IsNotEmpty()
  readonly startTime: string;

  @IsString()
  @IsNotEmpty()
  readonly endTime: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly location: string;
}
