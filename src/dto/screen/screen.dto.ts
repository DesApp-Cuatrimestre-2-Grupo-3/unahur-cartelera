import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class ScreenDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID de la pantalla',
    example: '1',
  })
  public readonly id: number;

  @ApiProperty({
  })
  templeteId: string;

  @IsOptional()
  @ApiProperty({
  })
  sector?: IdIdentityDTO;
}
