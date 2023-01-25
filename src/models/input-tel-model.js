export class InputTelModel{
  constructor(
    texto = null, 
    estilosLabel = null, 
    value = null, 
    estilosInput = null,
    placeholder = null,
    data = null
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.value = value;
    this.estilosInput = estilosInput;
    this.placeholder = placeholder;
    this.data = data;
  }
}