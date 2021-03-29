const input = document.querySelector("#input_num")
input_num.addEventListener("change",mostrarRpta)


function mostrarRpta(){
    const result = numeros()
    console.log(result)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = result
}


function numeros(){
    let string = input_num.value;
    const nuevoVector = [];
    const vector = string.split(",")
    console.log(vector)
    for(let j=0; j<vector.length; j++){
        if(numeroVeces(vector,vector[j]) > 1){
            nuevoVector.push(vector[j])
        }
    }
    return nuevoVector;

}  

function numeroVeces(vector, numero){
    let apariciones = 0;
    for(let i=0; i<vector.length; i++){
        if(vector[i] === numero ){
            apariciones ++;
        }
    }
    return apariciones;

}