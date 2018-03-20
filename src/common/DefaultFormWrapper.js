import React from 'react';

const RenderTextInput = ({ input, label, type, meta: { touched, error }, className }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export {
  RenderTextInput,
};