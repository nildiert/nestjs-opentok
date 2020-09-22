import { ApiProperty } from '@nestjs/swagger';

export class SuscriptionsDTO {
  @ApiProperty()
  readonly user_id?: string;

  @ApiProperty()
  readonly channel_id: string;

  constructor(user_id: string, channel_id: string) {
    this.user_id = user_id;
    this.channel_id = channel_id;
  }
}
