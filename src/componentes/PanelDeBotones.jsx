import Boton from "./Boton"


function PanelDeBotones ({clickHandler}){
const handlerClick = nombreDeBoton => clickHandler(nombreDeBoton)


    return(
        <div>
            <div>
            <Boton nombre="AC" clickHandler={handlerClick} />
            <Boton nombre="7" clickHandler={handlerClick} />
            <Boton nombre="8" clickHandler={handlerClick} />
            <Boton nombre="9" clickHandler={handlerClick} />
            <Boton nombre="x" clickHandler={handlerClick} />
          
            </div>
            <div>
            <Boton nombre="4" clickHandler={handlerClick} />
            <Boton nombre="5" clickHandler={handlerClick} />
            <Boton nombre="6" clickHandler={handlerClick} />
            <Boton nombre="-" clickHandler={handlerClick} />

            </div>
            <div>
            <Boton nombre="1" clickHandler={handlerClick} />
            <Boton nombre="2" clickHandler={handlerClick} />
            <Boton nombre="3" clickHandler={handlerClick} />
            <Boton nombre="+" clickHandler={handlerClick} />
          
            </div>
            <div>
            <Boton nombre="/" clickHandler={handlerClick} />
            <Boton nombre="0" clickHandler={handlerClick} />
            <Boton nombre="." clickHandler={handlerClick} />
            <Boton nombre="=" clickHandler={handlerClick} />
            <Boton nombre="+/-" clickHandler={handlerClick} />


        
          
            </div>
       
          
        </div>
    )
}
export default PanelDeBotones;