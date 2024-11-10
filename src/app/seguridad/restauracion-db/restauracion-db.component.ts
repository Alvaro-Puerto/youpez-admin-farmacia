import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../services/permisos.service';
import { NotificationService } from 'carbon-components-angular';
import Grid from 'tui-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restauracion-db',
  templateUrl: './restauracion-db.component.html',
  styleUrls: ['./restauracion-db.component.scss']
})
export class RestauracionDbComponent implements OnInit {

  grid: Grid;
  constructor(
    private permisoServices: PermisosService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createGrid();
    this.obtenerBackup();
  }

  backups() {
    this.permisoServices.generarBackup()
      .subscribe((data:any) => {
        console.log(data)
        this.obtenerBackup();
        this.notificationService.showToast({
          type: "success",
          title: "Notificacion",
          //subtitle: "Sample subtitle message",
          caption: "Se ha generado el respaldo correctamente",
          target: "#targetBackup",
          message: "message",
          duration: 2000,
        });
      }, err => {
        console.log(err);
      });
  }

  obtenerBackup() {
    this.permisoServices.obtenerBackup()
      .subscribe((data:any) => {
        console.log(data)
        this.grid.resetData(data);
      }, err => {
        console.log(err);
      });
  }

  createGrid() {
    this.grid = new Grid({
      el: document.getElementById('grid-backup'),
      data: [],
      scrollX: false,
      scrollY: false,
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: [
        {header: 'Nombre', name: 'nombre', align: 'left', filter: 'text'},
        {header: 'Fecha', name: 'created_at', align: 'right', filter: 'text'},
        {header: 'Tamaño', name: 'size', align: 'right', filter: 'text'},
        {header: 'Acciones', name: 'acciones', align: 'right'}
      ]
    });
  }

  excel() {
    this.grid.export('xlsx');
  }

  restauraBasesDeDatos() {
    this.permisoServices.restore()
      .subscribe((data:any) => {
        console.log(data)
        this.notificationService.showToast({
          type: "success",
          title: "Notificacion",
          //subtitle: "Sample subtitle message",
          caption: "Se ha restaurado la base de datos correctamente",
          target: "#targetBackup",
          message: "message",
          duration: 2000,
        });

        window.location.reload();
        this.router.navigate(['/auth/login']);

      }, err => {
        console.log(err);

        this.notificationService.showToast({
          type: "success",
          title: "Notificacion",
          //subtitle: "Sample subtitle message",
          caption: "Se ha restaurado la base de datos correctamente",
          target: "#targetBackup",
          message: "message",
          duration: 2000,
        });

        window.location.reload();
        this.router.navigate(['/auth/login']);

      });
  }
}
