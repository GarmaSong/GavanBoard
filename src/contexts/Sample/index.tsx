import { createContext, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SampleProvider = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export { SampleProvider };
