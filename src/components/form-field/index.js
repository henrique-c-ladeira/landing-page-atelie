import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import MaskedInput from 'react-input-mask';

const BareFormField = styled(TextField).attrs({})``;

export const FormField = ({
  mask, value, onChange, ...props
}) => (
  <MaskedInput
    value={value}
    onChange={onChange}
    mask={mask}
  >
    <BareFormField {...props} />
  </MaskedInput>
);
