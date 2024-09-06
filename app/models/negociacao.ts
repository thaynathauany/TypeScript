export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  // Métodos get para acessar as propriedades privadas
  // Os getters para quantidade e valor foram removidos, pois as propriedades são públicas e readonly, 
  // então podem ser acessadas diretamente, e não podem ser modificadas fora da classe.

  // get data() {
  //   return this._data;
  // }

  // get quantidade() {
  //   return this._quantidade;
  // }

  // get valor() {
  //   return this._valor;
  // }

  get volume() {
    return this.quantidade * this.valor;
  }

  // Método get para retornar uma cópia da data
  // Isso garante que a data original (_data) não seja modificada fora da classe.
  get data(): Date {
    const data = new Date(this._data.getTime()); // Cria uma nova instância de Date para evitar alterações na data original.
    return data;
  }
}