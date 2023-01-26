export class InputNumberModel{
  constructor(
    texto = null, 
    estilosLabel = null, 
    estilosInput = null,
    value = null, 
    placeholder = null,
    data = null,
    accion = null
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.estilosInput = estilosInput;
    this.value = value;
    this.placeholder = placeholder;
    this.data = data;
    this.accion = accion;
  }
}