export class SelectOptionModel{
  constructor(
    texto, 
    estilosLabel, 
    estilosSelect,
    value,
    data,
    opciones
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.estilosSelect = estilosSelect;
    this.value = value;
    this.data = data;
    this.opciones = opciones;
  }
}