import { createContext } from 'react';

export const FormGroupContext = createContext({});

function FormGroupProvider({ children, ...props }) {
  return (
    <FormGroupContext.Provider value={props}>
      {children}
    </FormGroupContext.Provider>
  );
}

export default FormGroupProvider;
