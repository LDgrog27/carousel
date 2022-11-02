import React from "react";
import bolso from './../img/fondo 3.png'
import img2 from './../img/Eren Levi.jpg'
import img3 from './../img/Goku Sheng Long.jpg'
import img4 from './../img/cartuchera.png'

// ------- Por si es necesario usar fotos en los botones ------
//import MoveDerecha from './../img/move-rigth.png'
//import MoveIzquierda from './../img/move-left.png'
//-------------------------------------------------------------

import { ReactComponent as FlechaDerecha } from "./../img/iconmonstr-angel-right-thin.svg";
import { ReactComponent as FlechaIzquierda } from "./../img/iconmonstr-angel-left-thin.svg";

// -------------- Style Components -----------------
import styled from 'styled-components'

const Slideshow = () => {
    return (
        // ------------- Preguntar a Matias por que con F2 no me deja cambiar el nombre del Componente -------------
        <ContenedorPrincipal>
            <ContenedorCarousel>
                <Slide>
                    <a href="https://google.com.ar">
                        <img className="img-slide" src={bolso} alt="" />
                    </a>
                </Slide>
                <Slide>
                    <a href="https://www.instagram.com/lautarolmds27/">
                        <img className="img-slide" src={img2} alt="" />
                    </a>
                </Slide>
                <Slide>
                    <a href="https://google.com.ar">
                        <img className="img-slide" src={img3} alt="" />
                    </a>
                </Slide>
                <Slide>
                    <a href="https://google.com.ar">
                        <img className="img-slide" src={img4} alt="" />
                    </a>
                </Slide>

                <div>
                    <button>COMPRAR AHORA</button>
                </div>
                
            </ContenedorCarousel>

            



            <Controles>
                <Boton izquierdo>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho>
                    <FlechaDerecha />
                </Boton>

            </Controles>


        </ContenedorPrincipal>


        // ----------------- Debo ubicar el BOTON "COMPRAR AHORA" -----------------------------------
        //<TextoSlide>
        // <p>Exclusivo <strong> 15% </strong> off  en seleccionados</p>
        //</TextoSlide>
    )
}

const ContenedorPrincipal = styled.div`
    position: relative;

`;
const ContenedorCarousel = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .5s ease all;
    z-index: 10;
    position: relative;
//------El max-heigth es solo por si las imagenes no son del mismo tamaño ------    
   /* max-heigth: 500px; */
    

    
//----------- imagenes del slide (Se puede cambiar por class name) ------------
    img {
    width: 100%;
    vertical-align: top;
}

`;

const TextoSlide = styled.div`
    
    
//-----Optativo-------
    width: 100%;
    //background: rgba(0, 0, 0, 0.1);
    //background: rgba(0, 0, 0, .25);
    //padding: 10% 25% 0% 50%;
   //margin: 10% 0 0 40%;
   // color: #fff;
//--------------------------------   
   color: #6A6A6A;
   
    
    position: absolute;
    text-align: center;
    z-index: 11;
    bottom: 0;
    padding: 0% 0% 20% 35%;

    @media screen and (max-width: 850px){
        position: relative;
    }
//-----------------------PRUEBAS---------------------------------------
//@media screen and (max-width: 700px) {
  //      position: fixed;
   //     padding: 100px 0px 235px;
     //   p, strong{
       //     font-size: 18px;
            
        //}
        //p{
         //   background:rgb(0, 0, 0, .2);
        //}
        
        
    //}
    
    
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 90.5%;
    pointer-events: none;

`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 77%;;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    
    //border: #48484A;
    
    path{
        filter: ${props => props.derecho ? 'drop-shadow(-1px 0px 3px #48484A)' : 'drop-shadow(1px 0px 3px #48484A)' } ;
    }

    ${props => props.derecho ? 'right: 0' : 'lefto: 0'}
`;

export default Slideshow;