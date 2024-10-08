//Nomeando os tipos de dados e nomeando suas variaveis
let nomeProduto = document.getElementById('nome');
let valorProduto = document.getElementById('valor');
let quantidadeProduto = document.getElementById('qtd');
let imgProduto = document.getElementById('img');
let produtos = [];
let id = 1;

//Aqui o professor está validando os dados para cada item [nome, valor, quantidade e img]
function validarDados() {
    event.preventDefault();

    const campos = [nomeProduto, valorProduto, quantidadeProduto, imgProduto];
//quando o campo [forEach (campo)] vai pegar cada campo referente ao [nome, valor, quantidade e img] e ver se os campos foram preenchidos

    campos.forEach((campo) => {

        const valorCampo = campo.value.trim();
//se cada campo for preenchido, o "valorCampo" vai determinar se ele é "válido" ou "inválido", se não... o válido fica "inválido" 
//e o inválido fica "válido"
        if (valorCampo.length !== 0) { 
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        } else {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        }
    });
}

function cadastrarProdutor() {
//Caso o usuário escreva os produtos vão ser atribuidos a um novo valor, que é o valor que foi escrito na tela
    if (nomeProduto.value && valorProduto.value && quantidadeProduto.value && imgProduto.value) {
        if (produtos.length === 0){}
        produtos.push({
            id: id, 
            nome: nomeProduto.value, 
            valProduto: valorProduto.value, 
            qtdProduto: quantidadeProduto.value, 
            img: imgProduto.value
        })  
        
        id++

    } else {
        ''
    }
}
    //No ID da tabela, quando cada item for deletado, seo valor do produto for igual a 0 
    //quando um novo item for adicionado, seu ID vai ser recebido como 1 e por ai em diante. 
    
   function renderProdutos() {
   if(produtos.length === 0) {
    id = 1;
    produtos = [];
   }
}
//aqui a innerHTML tá mechendo diretamente no documento do HTML, agora cada linha [nome, valor, quantidade e imagem] vai ser 
//atribuido ao ${item} a cada um deles, ou seja cada item alterado vai ter seu valor incluido dentro dessas linhas.
function renderProdutos() {
    conteudoTabela.innerHTML = ``; 
    produtos.forEach((item) => { 
        conteudoTabela.innerHTML += `
        <tr id="linha-${item.id}">
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.valProduto}</td>
        <td>${item.qtdProduto}</td>
        <td><img style="width: 25px; height: 25px" src="${item.img}"></td>
        <td>
            <button onclick="editProduto(${item.id})" type="button" class="btn btn-warning">Update</button>
            <button onclick="excluirProduto(${item.id})" type="button" class="btn btn-danger">Excluir</button>
        </td>
       </tr>
    `;
    });

}

function editProduto(id) {
    
    produtos = produtos.map((item) => {
        if (item.id === id) {
            return {
                id: id,
                nome: nomeProduto.value,
                valProduto: valorProduto.value,
                qtdProduto: quantidadeProduto.value,
                img: imgProduto.value,
            };
        }
        return item; 
    });

    renderProdutos();

}


function excluirProduto(id) {

    window.alert("Deletando produto...")

    produtos = produtos.filter((item) => item.id !== id);

    const linha = document.getElementById(`linha-${id}`);
    if (linha) {
        linha.remove(); 
    }
}


//  function clearInputs() {
//     nomeProduto.value = '';
//     valorProduto.value = '';
//     quantidadeProduto.value = '';
//     imgProduto.value = '';

//     event.preventDefault();
// }