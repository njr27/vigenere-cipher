const $text = document.querySelector(".text")
const $key = document.querySelector(".cipher")
const $textResult = document.querySelector(".text-result")
const $button = document.querySelector(".button")

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]


function keyAdjust(text, key) {
  if (text.length >= key.length) {
    sizeText = text.length
    sizeText = parseInt(sizeText)

    sizeKey = key.length
    sizekey = parseInt(sizeKey)

    between = sizeText - sizeKey

    for (let i = 0; i < between; i++) {
      key.push(key[i])
    }
  }

  return key
}

$button.addEventListener("click", () => {
  const text = Array.from($text.value)
  console.log('Texto:')
  console.log(text)

  let key = Array.from($key.value)
  
  key = keyAdjust(text, key)

  console.log('Chave ajustada ao tamanho do texto:')
  console.log(key)

  console.log("//chave com o tamanho do texto")
  console.log(key.length)

  let newText = [""]
  let indexText = 0
  let indexKey = 0
  let newIndex = 0
  let newIndexSpace = 0

  for(let i = 0; i < text.length; i++){
    console.log(">> ENCOTRNANDO O TEXTO NO ALFABETO")
    
    //TENTATIVA DE USAR ESPAÇO EM BRANCO NO TEXTO
    // if(text[i] == ' '){

    //   newText[i] = ' '
    //   console.log('tem espaço')
    //   console.log(newText)
    //   newIndexSpace = i
    //   i++      
      
    // }

    for (let y = 0; y < alphabet.length; y++){      
  
      if(text[i] == alphabet[y] && text[i] != ' '){
        console.log('buscando o index do texto')
        indexText = alphabet.indexOf(alphabet[y]) 
        console.log(indexText)  
      }

      if(key[i] == alphabet[y]){
        console.log('buscando o index da chave')
        indexKey = alphabet.indexOf(alphabet[y])
        console.log(indexKey)        
      }
      
      console.log("atribuindo a cifra")

      newIndex = indexKey + indexText      
      newIndex = newIndex % 26    
      newText[i] = alphabet[newIndex]  
    }
    console.log(newText)    
  }    

$textResult.value = newText.join('')  

})
