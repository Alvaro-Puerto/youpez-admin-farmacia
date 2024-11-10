import { OptColumn } from "tui-grid/types/options"


class ActivoRederer {
  el: HTMLElement
  constructor(props) {
    const div = document.createElement('div');
    
    if(props.value){
      div.style.backgroundColor = 'seagreen';
      div.style.height = '30px';
      div.style.color = 'white';
      div.style.textAlign = 'center';
      div.style.lineHeight = '30px';
      div.textContent = 'Activo';
    } else {
      div.style.backgroundColor = 'red';
      div.style.height = '30px';
      div.style.color = 'white';
      div.style.textAlign = 'center';
      div.style.lineHeight = '30px';
      div.textContent = 'Inactivo';
    }
    this.el = div;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  render(props) {
    //this.el.value = String(props.value);
  }
}


export const columnasUM = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      minWidth: 100,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'nombre',
      header: 'Nombre',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'descripcion',
      header: 'Descripcion',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'abreviatura',
      header: 'Abreviatura',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'estado',
      header: 'Estado',
      minWidth: 200,
      renderer: ActivoRederer
    },
  ]

  return columns;
}

export const columnaBodega = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      minWidth: 100,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'nombre',
      header: 'Nombre',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'descripcion',
      header: 'Descripcion',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'ubicacion',
      header: 'Ubicacion',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }

    },
    {
      name: 'estado',
      header: 'Estado',
      minWidth: 150,
      renderer: ActivoRederer
    },
    {
      name: 'ref1',
      header: 'Referencia 1',
      minWidth: 300,
    },
    {
      name: 'ref2',
      header: 'Referencia w',
      minWidth: 300,
    },
    {
      name: 'ref3',
      header: 'Referencia 3',
      minWidth: 300,
    },
    {
      name: 'ref4',
      header: 'Referencia 4',
      minWidth: 300,
    },
    
  ]

  return columns;
}

export const columnasArticulo = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      minWidth: 100,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'nombre',
      header: 'Nombre',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'descripcion',
      header: 'Descripcion',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'codigo',
      header: 'Codigo',
      minWidth: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'estado',
      header: 'Estado',
      minWidth: 150,
      renderer: ActivoRederer
    },
    {
      name: 'ref1',
      header: 'Referencia 1',
      minWidth: 300,
    },
    {
      name: 'ref2',
      header: 'Referencia w',
      minWidth: 300,
    },
    {
      name: 'ref3',
      header: 'Referencia 3',
      minWidth: 300,
    },
    {
      name: 'ref4',
      header: 'Referencia 4',
      minWidth: 300,
    },
    
  ]

  return columns;

}