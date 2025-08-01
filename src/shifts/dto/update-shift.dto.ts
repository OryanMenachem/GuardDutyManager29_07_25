import { IsOptional, IsString } from 'class-validator';

export class UpdateShiftDto {
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
