import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { RoleDTO } from './role.dto';

@Controller('roles')
export class RoleController {
  Role: RoleDTO[] = [];

  @Get()
  getAllRole(): RoleDTO[] {
    return this.Role;
  }

  @Get(':id')
  getRoleUById(@Param('id') id: string): RoleDTO {
    const role = this.Role.find(role => role.id === id);
    return role;
  }

  @Post()
  newRole(@Body() role: RoleDTO): RoleDTO {
    const newRole = {
      ...role,
      role_id: '' + this.Role.length,
    };
    this.Role = [...this.Role, newRole];
    return newRole;
  }

  @Put(':id')
  updateRole(@Param('id') id: string, @Body() role: RoleDTO): RoleDTO {
    this.Role = this.Role.filter(role => role.id !== id);
    this.Role = [...this.Role, this.newRole(role)];
    return role;
  }

  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    this.Role = this.Role.filter(Role => Role.id !== id);
  }
}
