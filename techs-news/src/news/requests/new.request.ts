import { ApiProperty } from '@nestjs/swagger';

export class NewRequest {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public body: string;
}
