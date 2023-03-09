import React, { useContext } from 'react';
import { AiOutlinePrinter, AiOutlineIdcard } from "react-icons/ai";
import { GiTestTubes } from "react-icons/gi";
import { TbFileInvoice, TbQuestionMark } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";
import { BsPrinter } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiPapers } from "react-icons/gi";
import { TfiStamp } from "react-icons/tfi";
import '../../../styles/tipo-trabajo.css';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';

const TipoTrabajo = ({ accion }) => {
  const { setVerBotonesTipoTrabajo } = useContext(NuevaOrdenTbjCompContext);

  const handleTipoTrabajo = (e) => {
    accion(e.target.id);
    setVerBotonesTipoTrabajo(false);
  }

  return (
    <div className='tipo-trabajo--botones-container modulo'>
      <button onClick={ handleTipoTrabajo }  id='impresiones' className='tipo-trabajo--boton' >
          <AiOutlinePrinter className='svg' />
          Impresiones
      </button>
      <button onClick={ handleTipoTrabajo } id='loma' className='tipo-trabajo--boton' >
        <GiTestTubes className='svg' />
        LOMA
      </button>
      <button onClick={ handleTipoTrabajo } id='talonarios' className='tipo-trabajo--boton' >
        <TbFileInvoice className='svg' />
        Talonarios
      </button>
      <button onClick={ handleTipoTrabajo } id='bonos' className='tipo-trabajo--boton' >
        <RiCoupon3Line className='svg' />
        Bonos
      </button>
      <button onClick={ handleTipoTrabajo } id='disenos' className='tipo-trabajo--boton' >
        <HiOutlineLightBulb className='svg' />
        Diseños
      </button>
      <button onClick={ handleTipoTrabajo } id='plotter' className='tipo-trabajo--boton' >
        <BsPrinter className='svg' />
        Plotter
      </button>
      <button onClick={ handleTipoTrabajo } id='remeras' className='tipo-trabajo--boton' >
        <IoShirtOutline className='svg' />
        Remeras
      </button>
      <button onClick={ handleTipoTrabajo } id='tarjetas' className='tipo-trabajo--boton' >
        <AiOutlineIdcard className='svg' />
        Tarjetas
      </button>
      <button onClick={ handleTipoTrabajo } id='volantes' className='tipo-trabajo--boton' >
        <GiPapers className='svg' />
        Volantes
      </button>
      <button onClick={ handleTipoTrabajo } id='sellos' className='tipo-trabajo--boton' >
        <TfiStamp className='svg' />
        Sellos
      </button>
      <button onClick={ handleTipoTrabajo } id='varios' className='tipo-trabajo--boton' >
        <TbQuestionMark className='svg' />
        Varios
      </button>
    </div>
  );
}

export default TipoTrabajo;
