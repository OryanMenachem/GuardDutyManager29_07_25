import { IsOptional, IsString } from 'class-validator';

export class UpdateShiftDto {
  // This decorator makes the 'startTime' field optional when updating a shift
  @IsOptional()
  @IsString()
  readonly startTime?: string;

  @IsOptional()
  @IsString()
  readonly endTime?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly location?: string;
}
