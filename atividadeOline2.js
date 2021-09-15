var dataEv = new Date(2021,09,16);
var dataAtual = new Date(2021,09,13);
const idade = 18;
var convidados = ['João','Maria','José']
var quanConvidados = convidados.length;

if(idade >= 18){
    console.log('Cadastro feito, maior de idade.');
}else{
    console.log('Não permitimos menores no app');
}

if(dataEv >= dataAtual){
    console.log('Evento marcado para o dia: '+dataEv.getDate()+ '/'+dataEv.getMonth());
}else{
    console.log('não se pode marcar um evento para uma data que já passou');
}

if(quanConvidados<=100){
    quanConvidados = convidados.length - 1;
    for(let i=0; i<=quanConvidados; i++ ){
        console.log('Convidado(a): '+convidados[i]);
    }
}else{
    console.log('Excedeu o número de convidados')
}