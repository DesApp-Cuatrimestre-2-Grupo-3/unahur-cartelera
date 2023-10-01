import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class ScheduleDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del sector',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Fecha de inicio del cronograma',type:new Date()
  })
  public startDate: Date;

  @ApiProperty({
    description: 'Fecha de finalización del cronograma',
    example: 2023-9-12,
  })
  public endDate: Date;

  @ApiProperty({
    description: 'Horario de inicio del cronograma',
    example: '9:00',
  })
  public startHour: Date;

  @ApiProperty({
    description: 'Horario de finalización del cronograma',
    example: '16:00',
  })
  public endHour: Date;

  @ApiProperty({
    description: 'Días programados',
    example: '2023-9-4, 2023-9-6, 2023-9-10',
  })
  public dayCode: string;
}
