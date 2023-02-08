import React from 'react';
import '../../styles/not-found-comp.css';
import { TbFaceIdError } from "react-icons/tb";

const NotFoundComp = () => {
  return (
    <div className='not-found-container'>
      <TbFaceIdError className='not-found--icon' />
      <p className='not-found--mensaje'>
        <strong className='not-found--error'>Error 404</strong> - Not found
      </p>
    </div>
  );
}

export default NotFoundComp;
