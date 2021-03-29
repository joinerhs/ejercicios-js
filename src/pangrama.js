const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const input = document.querySelector("#input_pan")
input_pan.addEventListener("change",mostrarRpta)


function mostrarRpta(){
    const result = pangrama()
    console.log(result)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = result
}


function pangrama(){
    let esPangrama = true;
    const text = input_pan.value;
    const newText = text.toLocaleLowerCase();
    input_pan.value="";

    for(let i=0; i<newText.length;i++){
        if(!newText.includes(alphabet[i])){
            esPangrama = false;
            break;
        }
    }

    return esPangrama?"El texto ingresado es un pangrama":"El texto ingresado no es un pangrama";
}   