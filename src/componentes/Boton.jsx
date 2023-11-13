
function Boton({clickHandler,nombre}){
 
    const handlerClick = () =>   clickHandler(nombre)



    return(
        <div>
            <button onClick={handlerClick}>{nombre}</button>
        </div>
    )

}
export default Boton;