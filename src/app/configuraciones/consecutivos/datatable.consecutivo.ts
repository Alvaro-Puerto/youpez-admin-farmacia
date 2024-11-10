import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"


export const getTablaConsecutivo = () => {
    const model = new TableModel()
    model.header = [
    new TableHeaderItem({
            data: "Alias",
            className: ""
        }),
      new TableHeaderItem({
        data: "Descripcion",
        className: ""
      }),
      new TableHeaderItem({
        data: "Valor Inicial",
        className: ""
      }),
      new TableHeaderItem({
        data: "Valor Final",
        className: "",
      }),
      new TableHeaderItem({
        data: "Valor Actual",
        className: "",
      }),
      new TableHeaderItem({
        data: "Estado",
        className: "",
      })
    ]
  
    return model
  }

export const mapperArticulo = (data) => {
    return data.map(item => {
        return [
        new TableItem({data: item.ID}),
        new TableItem({data: item.nombre}),
        new TableItem({data: item.descripcion}),
        new TableItem({data: item.unidad_medida}),
        new TableItem({data: item.fecha_creacion}),
        new TableItem({data: item.activo ? 'Activo' : 'Inactivo'})
        ]
    })
    }