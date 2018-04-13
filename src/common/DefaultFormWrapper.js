import React from 'react';

const RenderTextInput = ({ input, label, type, meta: { touched, error }, className, wrapperClassName, inputWrapperClassName, placeholder }) => (
  <div className={wrapperClassName}>
    {label && <label>{label}</label>}
    <input {...input} placeholder={placeholder} type={type} className={className}/>
    {touched && error && <span>{error}</span>}
  </div>
);

export {
  RenderTextInput,
};