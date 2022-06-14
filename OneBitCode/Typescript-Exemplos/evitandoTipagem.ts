//tipo opcional

function sendSpace(spaceship: {pilot: string, copilot?: string}) { //→ copiloto é opcional(?)→ propriedade pode estar presente ou não
    //...
}
sendSpace({pilot : "Han Solo", copilot: "Chewbacca"})

sendSpace({pilot: "Luke"}) 

//unknow

let input : unknown //vai ter um tipo, mas não sei qual é -> aceita todos os tipos de informação
input = "test"
input = 20
input = []


//any
let exemplo : any

exemplo = "carla"

let text : string
text = exemplo //consegue ser atribuido a outros tipos porque o ts fica desabilitado e não reconhece.

//never → retorno de função do tipo never → indicar que o valor está errado (variável está errada e não deveria existir - caso que nunca deveria acontecer → evitar atribuir qualquer tipo a essa variável) 
function verification(test) {
    if (test) {
        //...
    } else {
        let _check: never
        let text = _check

        //text = "" //não conseguimos fazer receber valor nenhum, porque é never -> sempre dara erro. 
        return _check
    }
}