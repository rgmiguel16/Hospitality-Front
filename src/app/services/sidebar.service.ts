import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu = [];

  cargarMenu() {
    this.menu = [
      {
        titulo: 'Mantenimientos',
        icono: 'mdi mdi-folder-lock-open',
        submenu: [
          { titulo: 'Hospitales', url: 'hospitales' },
          { titulo: 'Médicos', url: 'medicos' },
        ],
      },
    ];
  }
}