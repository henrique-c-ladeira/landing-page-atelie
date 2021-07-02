import React from 'react';
import { Button as SButton } from './styles';

export const Button = ({ children, ...props }) => (
  <SButton type="button" {...props}>{children}</SButton>
);
