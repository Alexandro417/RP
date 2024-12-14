import { Controller, Patch, UseGuards, Body } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('superadmin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SuperadminController {
  
  @Patch('modificar-configuracion')
  @Roles('superadmin')
  modifyConfiguration(@Body() config: any) {
    // lógica para modificar configuración crítica
  }
}
