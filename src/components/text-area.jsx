import React from 'react';

const TextArea = ({ texto }) => {
  return (
    <label>
      { texto }
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </label>
  );
}

export default TextArea;
