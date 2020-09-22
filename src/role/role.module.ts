import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
@Module({
  imports: [],
  controllers: [RoleController],
  providers: [],
})
export class RoleModule {}
