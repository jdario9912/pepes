export class InputRadioModel{
  constructor(
    name = null, 
    id = null, 
    value = null, 
    handleComponent = null
  ){
    this.name = name;
    this.id = id;
    this.value = value;
    this.handleComponent = handleComponent;
  }
}