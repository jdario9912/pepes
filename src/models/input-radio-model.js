export class InputRadioModel{
  constructor(name, id, value, handleComponent = null){
    this.name = name;
    this.id = id;
    this.value = value;
    this.handleComponent = handleComponent;
  }
}