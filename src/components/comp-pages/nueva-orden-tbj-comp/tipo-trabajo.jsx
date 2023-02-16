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
    <div>
      <button onClick={ handleTipoTrabajo }  id='Impresiones'>
          <AiOutlinePrinter className='svg' />
          Impresiones
      </button>
      <button onClick={ handleTipoTrabajo } id='LOMA'>
        <GiTestTubes className='svg' />
        LOMA
      </button>
      <button onClick={ handleTipoTrabajo } id='Talonarios' >
        <TbFileInvoice className='svg' />
        Talonarios
      </button>
      <button onClick={ handleTipoTrabajo } id='Bonos' >
        <RiCoupon3Line className='svg' />
        Bonos
      </button>
      <button onClick={ handleTipoTrabajo } id='Diseños' >
        <HiOutlineLightBulb className='svg' />
        Diseños
      </button>
      <button onClick={ handleTipoTrabajo } id='Plotter' >
        <BsPrinter className='svg' />
        Plotter
      </button>
      <button onClick={ handleTipoTrabajo } id='Remeras' >
        <IoShirtOutline className='svg' />
        Remeras
      </button>
      <button onClick={ handleTipoTrabajo } id='Tarjetas' >
        <AiOutlineIdcard className='svg' />
        Tarjetas
      </button>
      <button onClick={ handleTipoTrabajo } id='Volantes' >
        <GiPapers className='svg' />
        Volantes
      </button>
      <button onClick={ handleTipoTrabajo } id='Sellos' >
        <TfiStamp className='svg' />
        Sellos
      </button>
      <button onClick={ handleTipoTrabajo } id='Varios' >
        <TbQuestionMark className='svg' />
        Varios
      </button>
    </div>
  );
}

export default TipoTrabajo;
