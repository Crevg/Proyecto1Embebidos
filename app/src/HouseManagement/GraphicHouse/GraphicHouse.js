import React from "react";
import Styles from "./GraphicHouse.module.css"
import {Button} from "reactstrap"


export default function GraphicHouse(props) {


    return (
      <div className={Styles.GraphicHouse}>

        <div className={Styles.buttonGroupLights}> 
          
        <Button color="primary" onClick={() => props.turnAllOn()}> Encender todas </Button>{ ' '}
        <Button color="danger" onClick={() => props.turnAllOff()}> Apagar todas </Button>{ ' '}
        </div>

        <div className={Styles.maincontainer}>


          <div className={Styles.comedor}>
            <div className={Styles.mesa_comedor}>
              <div className={[Styles.silla_comedor, Styles.silla_1].join(' ')}></div>
              <div className={[Styles.silla_comedor, Styles.silla_2].join(' ')}></div>
              <div className={[Styles.silla_comedor, Styles.silla_3].join(' ')}></div>
              <div className={[Styles.silla_comedor, Styles.silla_4].join(' ')}></div>
              <div className={Styles.mesa_centro}></div>
            </div>
            <div className={Styles.puerta_container}>
              <div className={props.isDoorOpened("Back") ? Styles.puerta_gira : Styles.puerta_gira_cerrada}></div>
              <div className={[Styles.puerta, props.isDoorOpened("Back") ? Styles.puerta_abierta : Styles.puerta_cerrada].join(' ')}></div>
            </div>
            <div className={props.isLightOn("Comedor") ? Styles.bombilloOn : Styles.bombilloOff} onClick={() => props.switchButton("Comedor")}></div>
          </div>


          <div className={Styles.bano}>
            <div className={Styles.tina_afuera}>
              <div className={Styles.tina_adentro}></div>
            </div>
            <div className={Styles.inodoro_container}>
              <div className={Styles.inodoro_arriba}></div>
              <div className={Styles.inodoro_abajo}></div>
            </div>
          </div>


          <div className={Styles.cocina}>
            <div className={Styles.mueble_1_cocina}></div>
            <div className={Styles.mueble_2_cocina}></div>
            <div className={props.isLightOn("Cocina") ? Styles.bombilloOn : Styles.bombilloOff} onClick={() => props.switchButton("Cocina")}></div>
          </div>


          <div className={[Styles.cuarto, Styles.cuarto_2].join(' ')}>
            <div className={[Styles.cama, Styles.cama_der].join(' ')}>
              <div className={[Styles.almohada, Styles.almohada_1, Styles.almohada_der].join(' ')}></div>
              <div className={[Styles.almohada, Styles.almohada_2, Styles.almohada_der].join(' ')}></div>
              <div className={[Styles.cobija, Styles.cobija_der].join(' ')}></div>
            </div>

            <div className={Styles.puerta_container}>
              <div className={props.isDoorOpened("Cuarto 2") ? Styles.puerta_gira : Styles.puerta_gira_cerrada}></div>
              <div className={[Styles.puerta, props.isDoorOpened("Cuarto 2") ? Styles.puerta_abierta : Styles.puerta_cerrada].join(' ')}></div>
            </div>

            <div className={props.isLightOn("Cuarto 2") ? Styles.bombilloOn : Styles.bombilloOff} onClick={() => props.switchButton("Cuarto 2")}></div>
          </div>



          <div className={[Styles.cuarto, Styles.cuarto_1].join(' ')}>
            <div className={Styles.puerta_container}>
              <div className={props.isDoorOpened("Cuarto 1") ? Styles.puerta_gira : Styles.puerta_gira_cerrada}></div>
              <div className={[Styles.puerta, props.isDoorOpened("Cuarto 1") ? Styles.puerta_abierta : Styles.puerta_cerrada].join(' ')}></div>
            </div>


            <div className={[Styles.cama, Styles.cama_izq].join(' ')}>

              <div className={[Styles.almohada, Styles.almohada_1, Styles.almohada_izq].join(' ')}></div>
              <div className={[Styles.almohada, Styles.almohada_2, Styles.almohada_izq].join(' ')}></div>
              <div className={[Styles.cobija, Styles.cobija_izq].join(' ')}></div>
            </div>
            <div className={props.isLightOn("Cuarto 1") ? Styles.bombilloOn : Styles.bombilloOff} onClick={() => props.switchButton("Cuarto 1")}></div>

          </div>



          <div className={Styles.sala}>
            <div className={Styles.mesa_sala}></div>
            <div className={Styles.sofa}> <div></div>  </div>
            <div className={props.isLightOn("Sala") ? Styles.bombilloOn : Styles.bombilloOff} onClick={() => props.switchButton("Sala")}></div>
            <div className={Styles.puerta_container}>
              <div className={props.isDoorOpened("Front") ? Styles.puerta_gira : Styles.puerta_gira_cerrada}></div>
              <div className={[Styles.puerta, props.isDoorOpened("Front") ? Styles.puerta_abierta : Styles.puerta_cerrada].join(' ')}></div>
            </div>
          </div>


        </div>
      </div>








    );
  }

