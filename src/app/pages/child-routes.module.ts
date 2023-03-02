import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';

import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    data: { titulo: 'Ajustes de cuenta' },
  },
  {
    path: 'buscar/:termino',
    component: BusquedaComponent,
    data: { titulo: 'Busquedas' },
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    data: { titulo: 'Perfil de usuario' },
  },


  // Mantenimientos
  {
    path: 'hospitales',
    component: HospitalesComponent,
    data: { titulo: 'Matenimiento de Hospitales' },
  },
  {
    path: 'medicos',
    component: MedicosComponent,
    data: { titulo: 'Matenimiento de Medicos' },
  },
  {
    path: 'medico/:id',
    component: MedicoComponent,
    data: { titulo: 'Matenimiento de Medicos' },
  },

  
  // Rutas del Usuario
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { titulo: 'Matenimiento de Usuarios' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
