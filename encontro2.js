var nAluno = 20;

for(let i = 0; i<= nAluno; i++){
    if(i!==0 && i%2==0){
        console.log("O número "+i+" é par");
    }else if (i%2!==0){
        console.log("O número "+i+" é impar");
    }else{
        console.log("O número "+i+" é zero");
    }
}