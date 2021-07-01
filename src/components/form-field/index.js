import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import MaskedInput from 'react-input-mask';

const BareFormField = styled(TextField).attrs({})``;

export const FormField = ({ mask, onChange, ...props }) => (
  <MaskedInput
    onChange={onChange}
    mask={mask}
  >
    <BareFormField {...props} />
  </MaskedInput>
);
