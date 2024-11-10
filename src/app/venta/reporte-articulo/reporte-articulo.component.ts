import { Component, OnInit } from '@angular/core';
import { UmService } from '../services/um/um.service';
import { ActivatedRoute } from '@angular/router';
import Grid from 'tui-grid';
import { columnasArticulo } from '../inventario/articulos/articulo/datatable.articulo';

@Component({
  selector: 'app-reporte-articulo',
  templateUrl: './reporte-articulo.component.html',
  styleUrls: ['./reporte-articulo.component.scss']
})
export class ReporteArticuloComponent implements OnInit {
  id:any;
  gridOptions: Grid;
  bodega: any;
  total_articulos: any;

  constructor(
    private umService: UmService,
    private route: ActivatedRoute
  ) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.obtenerArticulo();
    });
  
  }
  obtenerDatos(id: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }

  crearGrid() {
    this.gridOptions = new Grid({
      el: document.getElementById('grid-articulo-um'),
      data: [],
      columns: columnasArticulo(),
      scrollX: true,
      scrollY: true,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
    });

    
  }

  exportarVentas() {
    this.gridOptions.export('xlsx', { fileName: 'ventas.xlsx' });
  }
 
  obtenerArticulo() {
    
    this.umService.getUmById(this.id).subscribe((res:any) => {
      this.crearGrid();
      this.gridOptions.resetData(res?.articulos);
      this.bodega = res?.bodega;
      this.total_articulos = res.total_articulos;
    });
  }

}
