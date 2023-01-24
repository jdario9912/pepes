export class InputNumberModel{
  constructor(
    texto = null, 
    estilosLabel = null, 
    estilosInput = null,
    value = null, 
    data = null,
    accion = null
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.value = value;
    this.estilosInput = estilosInput;
    this.data = data;
    this.accion = accion;
  }
}