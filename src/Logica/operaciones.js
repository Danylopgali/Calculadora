import Big from "big.js"


function operacion (numeroUno,numeroDos,operador) {
    const uno =Big(numeroUno|| "0")
    const dos=Big(numeroDos|| (operador=== "/" || operador === "x" ? "1" :"0"))
    const alerta="No se puede dividir entere 0"
    if (operador === "+") return uno.plus(dos).toString();
    if (operador === "-") return uno.minus(dos).toString();
    if (operador === "x") return uno.times(dos).toString();
    if (operador === "/") {
        if (dos=== 0){ return alerta;
        }
else{
        return uno.div(dos).toString();
        
       }
    }

    

}
export default operacion;