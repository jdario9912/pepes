import React from 'react';

const InputReset = ({ texto, estilosInput }) => {
  return (
    <>
      <input type="reset" value={ texto } className={ estilosInput } />
    </>
  );
}

export default InputReset;
