const pPe = 150;
const qCa = 8;
const nome = ['abc','ab','a'];
var numL = nome.length;
var numt;

if(pPe>100){
    console.log('peso da peça: '+pPe+'g cadastro aprovado');

}else{
    console.log('peso da peça:'+pPe+'g cadastro recusado');
}

if(qCa>10){
    console.log('capacidade da caixa:'+qCa+'aprovado para cadastro');
}else{
    console.log('capacidade da caixa:'+qCa+' reprovado para cadastro');
}
 
for(let i=0; i<numL; i++){
    numt = nome[i];
        if(numt.length >= 3){
            console.log('o nome'+numt+'foi aprovado, pois tem 3 ou mais caracteres');
        }
        else{
            console.log('erro devido ao nome: '+numt+' caracteres insuficientes para o cadastro');
        }

    
}