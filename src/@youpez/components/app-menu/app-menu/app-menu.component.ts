import {Component, OnInit, Input, ViewChildren, QueryList, ElementRef, Output, EventEmitter} from '@angular/core'
import {AppMenuItemComponent} from '../app-menu-item/app-menu-item.component'
import { PermisosService } from 'src/app/seguridad/services/permisos.service'

@Component({
  selector: 'youpez-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  @ViewChildren('menuLevel') menuLevel: QueryList<AppMenuItemComponent>
  @Input() menu: Array<any> = []
  @Input() opened: boolean = true
  permisosAsignados: any[] = [];
  permisosAsignadosNombres:any[] = [];
  @Output() groupToggle: EventEmitter<string> = new EventEmitter()

  constructor(
    private permisoService: PermisosService
  ) {
  }

  ngOnInit() {
    this.obtenerPermisos();
  }

  obtenerPermisos() {
    this.permisoService.obtenerUsuarioPermisos().subscribe((res: any) => {
      console.log(res);

      this.permisosAsignados = res.permissions;

      this.permisosAsignadosNombres = this.permisosAsignados.map((permiso) => {
        return permiso.name;
      });

      this.permisosAsignadosNombres.push('cerrar sesion');
      this.permisosAsignadosNombres.push('respaldo bd')

      this.permisoService.permisosAsignados = this.permisosAsignadosNombres;

      this.menu = this.menu.map((item) => {
        if (item.children) {
          item.children = item.children.map((child) => {
            child.disabled = !this.permisosAsignadosNombres.includes(child.permiso);
            return child;
          });
        }
        return item;
      });

      console.log(this.menu);
    });
  
  }

  onToggle(event) {
    this.menuLevel.map((item) => {
      item.toggleParent(event)
    })
  }

  onGroupToggle(groupName) {
    this.groupToggle.next(groupName)
  }
}
