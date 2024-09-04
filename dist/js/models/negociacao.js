export class Negociacao {
    // O construtor inicializa as propriedades da classe. 
    // As propriedades quantidade e valor são públicas e readonly, o que significa que podem ser lidas, mas não modificadas após a criação da instância.
    constructor(_data, // _data é privada e só pode ser acessada e modificada dentro da classe.
    quantidade, // quantidade é pública e readonly, ou seja, não pode ser alterada após a criação da instância.
    valor // valor é público e readonly, ou seja, não pode ser alterado após a criação da instância.
    ) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
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
    // Método get para calcular e retornar o volume (quantidade * valor)
    get volume() {
        return this.quantidade * this.valor; // Calcula o volume multiplicando a quantidade pelo valor
    }
    // Método get para retornar uma cópia da data
    // Isso garante que a data original (_data) não seja modificada fora da classe.
    get data() {
        const data = new Date(this._data.getTime()); // Cria uma nova instância de Date para evitar alterações na data original.
        return data;
    }
}
