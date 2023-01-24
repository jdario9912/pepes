export class InputTimeModel{
  constructor(
    texto = null, 
    estilosLabel = null, 
    value = null, 
    estilosInput = null,
    data = null
  ){
    this.texto = texto;
    this.estilosLabel = estilosLabel;
    this.value = value;
    this.estilosInput = estilosInput;
    this.data = data;
  }
}