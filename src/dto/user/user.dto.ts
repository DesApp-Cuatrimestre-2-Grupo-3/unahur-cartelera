import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class UserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del usuario',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan Lopez',
  })
  public name: string;

  @ApiProperty({
    description: 'DNI del usuario',
    example: "43567876",
  })
  public dni: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: "1234",
  })
  public password: string;

}
