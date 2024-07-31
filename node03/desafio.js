class Produto{
    #preco
    constructor(nome,preco,dataValidade){
        this.nome =nome;
        this.preco=preco;
        this.dataValidade=dataValidade;
    }
    exibirInformacoes(){
        return this.#preco
    }
    getPreco(){

    }
    setPreco(preco){
        this.#preco=preco;

    }
}

class Alimentos extends Produto{
    constructor(nome,preco,dataValidade,peso,ehPerecivel){
        super(nome,preco,dataValidade);
        this.peso=peso;
        this.ehPerecivel=ehPerecivel;

    }
    exibirInformacoes(){
        console.log(``)
    }
}

class  Bebidas extends Produto{
    constructor(nome,preco,dataValidade,volume,ehAlcoolica){
        super(nome,preco,dataValidade);
        this.voluem=volume;
        this.ehAlcoolica=ehAlcoolica;

}
exibirInformacoes(){
    super.exibirInformacoes();
    console.log(`Volume ${this.volume}, alcoolica ${this.ehAlcoolica}`)
}
}

class Estoque{
    constructor(){
        this.produtos=[];
    }
    adicionarProduto(){
        this.produtos.push(produto);
    }
    exibirProdutos(){
        this.produtos.forEach(produto=> produto.exibirInformacoes());
}
    removerProduto(produto){
        this.produtos=this.produtos.filter(p=>p !==produto.nome);
    }

}
    
