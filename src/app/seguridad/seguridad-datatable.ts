import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"
import { OptColumn } from "tui-grid/types/options"

export const getTablaRol = () => {
    const model = new TableModel()
    model.header = [
      new TableHeaderItem({
        data: " ",
        className: ""
    }),
    new TableHeaderItem({
            data: "ID",
            className: ""
        }),
      new TableHeaderItem({
        data: "Nombre",
        className: ""
      }),
      new TableHeaderItem({
        data: "Fecha de Creacion",
        className: "",
      }),
      new TableHeaderItem({
        data: "Fecha de Modificacion",
        className: "",
      })
    ]
  
    return model
  }

export const mapperRoles = (data) => {
    return data.map(item => {
        return [
        new TableItem({data: ""}),
        new TableItem({data: item.id}),
        new TableItem({data: item.name}),
        new TableItem({data: item.created_at}),
        new TableItem({data: item.updated_at})
        ]
    })
    }

export const rolColumns =  () =>{
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      align: 'left',
      width: 100,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'name',
      header: 'Nombre del rol',
      align: 'left',
      width: 400,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'created_at',
      header: 'Fecha hora creacion',
      align: 'left'
    },
    {
      name: 'updated_at',
      header: 'Fecha hora modificacion',
      align: 'left'
    },

  ]

  return columns;
}

class CustomSliderRenderer {
  el: HTMLElement
  constructor(props) {
    const div = document.createElement('div');
    
    if(props.value){
      div.style.backgroundColor = 'seagreen';
      div.style.height = '30px';
      div.style.color = 'white';
      div.style.textAlign = 'center';
      div.style.lineHeight = '30px';
      div.textContent = 'Asignado';
    } else {
      div.style.backgroundColor = 'red';
      div.style.height = '30px';
      div.style.color = 'white';
      div.style.textAlign = 'center';
      div.style.lineHeight = '30px';
      div.textContent = 'Sin asignar';
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

export const permisoColumns = () => {
  const columns: OptColumn[] = [
    {
      name: 'permission',
      header: 'Nombre del permiso',
      align: 'left',
      width: 600      ,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'assigned',
      header: 'Asignado',
      align: 'left',
      renderer: {
        type: CustomSliderRenderer,
      }
    }

  ]

  return columns;
}

export const usuarioColumns = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      align: 'left',
      width: 100,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'name',
      header: 'Nombre del usuario',
      align: 'left',
      width: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'email',
      header: 'Correo electronico',
      align: 'left',
      width: 300,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'assigned',
      header: 'Asignado',
      align: 'left',
      renderer: {
        type: CustomSliderRenderer,
      }
    }
  ]

  return columns;
}

export const columnaUsuarios = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      align: 'left',
      width: 100,

      
    },
    {
      name: 'name',
      header: 'Nombre del usuario',
      align: 'left',
      width: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'email',
      header: 'Correo electronico',
      align: 'left',
      width: 300,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: "identificacion",
      header: "Identificacion",
      align: "left",
      width: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'created_at',
      header: 'Fecha hora creacion',
      align: 'left'
    },
    {
      name: 'updated_at',
      header: 'Fecha hora modificacion',
      align: 'left'
    }
  ]

  return columns;
}
 
export const clientesColumnas = () => {
  const columns: OptColumn[] = [
    {
      name: 'id',
      header: 'ID',
      align: 'left',
      width: 50,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'estado',
      header: 'Estado',
      align: 'left',
      width: 100,
      renderer: {
        type: ActivoRederer,
      }
    },
    {
      name: 'nombres',
      header: 'Nombre del cliente',
      align: 'left',
      width: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'apellidos',
      header: 'Apellidos del cliente',
      align: 'left',
      width: 200,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      
    },
    {
      name: 'email',
      header: 'Correo electronico',
      align: 'left',
      width: 300,
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'telefono',
      header: 'Telefono',
      align: 'left',
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    },
    {
      name: 'direccion',
      header: 'Direccion',
      align: 'left',
      filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
    }
  ]

  return columns;
}