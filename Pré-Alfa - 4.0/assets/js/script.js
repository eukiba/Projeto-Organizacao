// meu codigo ufa garai
const cadastros = []
cadastros.sort()
var ok ='<a href = "#" onclick="document.getElementById(\'inicio\').hidden = true;document.getElementById(\'nextPage\').hidden = false;"><img src="assets/img/Menu.svg.png" alt=""></a>'
const res = document.getElementById('res')
function cadastro() {
    menu.innerHTML = ok 
    nome = document.getElementById('input-1'),
        numero = document.getElementById('phone'),
        marca = document.getElementById('input-2'),
        modelo = document.getElementById('input-3'),
        defeito = document.getElementById('input-4'),
        quemBusca = document.getElementById('input-5'),
        valorCombinado = document.getElementById('input-6')
    prazoDeEntrega = document.getElementById('input-7')
    colaborador = document.getElementById('input-8')

    const data = new Date();
    hora = data.toLocaleString('pt-br', { dateStyle: 'short', timeStyle : 'short'})
    

    let aleatorio = Math.random() * 10 - 1 + 1
    aleatorio = aleatorio.toFixed(4)
    
    if (nome.value.length == 0 ||
        marca.value.length == 0 ||
        numero.value.length == 0 ||
        modelo.value.length == 0 ||
        defeito.value.length == 0 ||
        quemBusca.value.length == 0 ||
        valorCombinado.value.length == 0 ||
        prazoDeEntrega.value.length == 0 ||
        colaborador.value.length == 0) {
        setResultado('[ERROR] Não é possível finalizar o cadastro com um ou mais campos em branco!', false)
        return
    } else {
        cadastros.push({
            nome: ' Nome: '+ nome.value + ' ',
            numero: ' Numero: ' + numero.value + ' ',
            marca: ' Marca: ' + marca.value + ' ',
            modelo: ' Modelo: ' + modelo.value + ' ',
            defeito: ' Defeito: ' + defeito.value + ' ',
            quemBusca: ' Quem Busca: ' + quemBusca.value + ' ',
            colaborador: ' Colaborador: ' +colaborador.value + ' ',
            prazoDeEntrega: ' Prazo de Entrega: ' + prazoDeEntrega.value + ' ',
            valorCombinado: ' Valor: ' + valorCombinado.value + '$' + ' ',
            hora: ' Data ' + hora + ' ',
            aleatorio: ' N° ID: ' + aleatorio + ' '
        });
        facilitandoTexto()
        setResultado(`Cadastro efetuado com suceso!!! N°(${aleatorio})`, true)
        return
    } function facilitandoTexto() {
        nome.value = ''
        numero.value = ''
        marca.value = ''
        modelo.value = ''
        defeito.value = ''
        quemBusca.value = ''
        valorCombinado.value = ''
        prazoDeEntrega.value = ''
        colaborador.value = ''
        nome.focus()
    }
}

function out() { // atualiza a pagina
    //document.location.reload(true);
}
function criaP() {
    const p = document.createElement('p')
    return p
}
function setResultado(msg, isValid) {
    const res = document.querySelector('div#res')
    res.innerHTML = ''
    const p = criaP()
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    res.appendChild(p)
} setResultado(msg)


function historico() { // exibe um historico de todos os cadrastros 
    if (cadastros.length == 0) { // valida se existe cadastro ativo
        histo.innerHTML = 'Não existe cadastro na memoria!'
    }
    for (let pos in cadastros)
        histo.innerHTML += `<ul>${Object.values(cadastros[pos])}</ul>`;
}
function letrasMaiusculas(id) { // formata toda primeira letra da palava para maiuscula
    var letra = document.getElementById(id).value;
    letra = letra.split("");
    var tmp = "";
    for (maiuscula = 0; maiuscula < letra.length; maiuscula++) {
        if (letra[maiuscula - 1]) {
            if (letra[maiuscula - 1] == " " || letra[maiuscula - 1] == ".") {
                letra[maiuscula] = letra[maiuscula].replace(letra[maiuscula], letra[maiuscula].toUpperCase());
            }
        } else {
            letra[maiuscula] = letra[maiuscula].replace(letra[maiuscula], letra[maiuscula].toUpperCase());
        }
        tmp += letra[maiuscula];
    }
    document.getElementById(id).value = tmp;
}
function mask(imput, off) { // formata o numero de telefone (34) xxxxx-xxxx
    setTimeout(function () {
        let valor = cell(imput.value);
        if (valor != imput.value) {
            imput.value = valor;
        }
    }, 1);
}
function cell(valor) {
    let res = valor.replace(/\D/g, "");//res = resultado
    res = res.replace(/^(\d{2})(\d)/g, "($1) $2");
    res = res.replace(/(\d)(\d{4})$/, "$1-$2");
    return res;
}

/*function pesquisar() { // pesquisa um item expessifico na memoria
    pesquisa = document.getElementById('p')
    pesquisa.value.length === 0 && cadastros.length === 0 // valida se existe cadastro ativo 
        ? histo.innerHTML = 'Não existe cadastro na memoria!'
        : histo.innerHTML = `${pesquisa.value}`
}*/