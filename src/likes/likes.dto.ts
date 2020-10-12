import { ApiProperty } from '@nestjs/swagger';

export class LikesDTO {
  @ApiProperty()
  readonly user_id?: string;

  @ApiProperty()
  readonly str_id: string;

  constructor(user_id: string, channel_id: string) {
    this.user_id = user_id;
    this.str_id = channel_id;
  }
}
