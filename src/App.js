import Display from "./componentes/Display";
import PanelDeBotones from "./componentes/PanelDeBotones";


function App(){

const state = {
total:null,
siguinte:null,
operador:null,
}


  return(
    <div>
      <Display value={state.siguinte|| state.total|| "0"   }  />
      <PanelDeBotones/>
    </div>
  )


}
export default App;