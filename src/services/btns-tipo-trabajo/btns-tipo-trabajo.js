import { AiOutlinePrinter, AiOutlineIdcard } from "react-icons/ai";
import { GiTestTubes } from "react-icons/gi";
import { TbFileInvoice, TbQuestionMark } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";
import { BsPrinter } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiPapers } from "react-icons/gi";
import { TfiStamp } from "react-icons/tfi";

export const btnsTipoTrabajo = [
  {
    id: 'impresiones',
    icon: <AiOutlinePrinter className='svg' />,
    texto: 'Impresiones'
  },
  {
    id: 'loma',
    icon: <GiTestTubes className='svg' />,
    texto: 'Loma'
  },
  {
    id: 'talonarios',
    icon: <TbFileInvoice className='svg' />,
    texto: 'Talonarios'
  },
  {
    id: 'bonos',
    icon: <RiCoupon3Line className='svg' />,
    texto: 'Bonos'
  },
  {
    id: 'disenos',
    icon: <HiOutlineLightBulb className='svg' />,
    texto: 'Diseños'
  },
  {
    id: 'plotter',
    icon: <BsPrinter className='svg' />,
    texto: 'Plotter'
  },
  {
    id: 'remeras',
    icon: <IoShirtOutline className='svg' />,
    texto: 'Remeras'
  },
  {
    id: 'tarjetas',
    icon: <AiOutlineIdcard className='svg' />,
    texto: 'Tarjetas'
  },
  {
    id: 'volantes',
    icon: <GiPapers className='svg' />,
    texto: 'Volantes'
  },
  {
    id: 'sellos',
    icon: <TfiStamp className='svg' />,
    texto: 'Sellos'
  },
  {
    id: 'varios',
    icon: <TbQuestionMark className='svg' />,
    texto: 'Varios'
  },
]