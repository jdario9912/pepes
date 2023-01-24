export class InputTextModel{
  constructor(
    texto = null, 
    estilosLabel = null, 
    value = null, 
    placeholder = null,
    estilosInput = null,
    data = null
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.value = value;
    this.placeholder = placeholder;
    this.estilosInput = estilosInput;
    this.data = data;
  }
}