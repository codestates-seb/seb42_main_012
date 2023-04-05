import React from 'react';
import FormGroupProvider from '../../../context/form-group-context';

function FormGroup({
  id,
  name,
  label,
  labelDetail,
  errors,
  register,
  setValue,
  validation,
  children,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-left font-semibold text-sm mb-2"
      >
        {label}
        {labelDetail && (
          <span className="block text-xs text-gray-400 font-normal">
            {labelDetail}
          </span>
        )}
      </label>
      <FormGroupProvider
        id={id}
        name={name}
        errors={errors}
        register={register}
        validation={validation}
        setValue={setValue}
      >
        {children}
      </FormGroupProvider>
      {errors && errors[name]?.type && (
        <p className="mt-1 text-sm text-danger text-left">
          {errors[name].message}
        </p>
      )}
    </>
  );
}

export default FormGroup;
