import React, { useState } from 'react';
import { Button, FormField, Select } from '../../../components';
import {
  ButtonWrapper, FormContainer, ErrorText, FormFieldWrapper, Gap,
} from '../styles';
import {
  classificationValidation,
  companyValidation, cpfValidation,
  emailValidation, nameValidation,
  passwordValidation,
} from '../../../validation';

export const SigninForm = ({ handleSubmit }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const [cpfStatus, setCpfStatus] = useState({ error: false, message: '' });
  const [passwordStatus, setPasswordStatus] = useState({ error: false, message: '' });

  const validate = (value, setStatus, validationMethod) => {
    const [error, message] = validationMethod(value);
    if (error) {
      setStatus({ error: true, message });
      return true;
    }
    setStatus({ error: false, message: '' });
    return false;
  };

  const submitForm = (event) => {
    const cpfError = validate(cpf, setCpfStatus, cpfValidation);
    const passwordError = validate(password, setPasswordStatus, passwordValidation);
    if (!(cpfError || passwordError)) {
      handleSubmit();
    }
    event.preventDefault();
  };

  const handleChange = (setState) => (event) => setState(event.target.value);

  return (
    <FormContainer onSubmit={submitForm}>
      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={cpf} onChange={handleChange(setCpf)} fullWidth mask="999.999.999-99" label="CPF" placeholder="CPF" />
          {cpfStatus.error && <ErrorText>{cpfStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={password} onChange={handleChange(setPassword)} fullWidth type="password" label="Senha" placeholder="Senha" />
          {passwordStatus.error && <ErrorText>{passwordStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>
      <Gap />
      <ButtonWrapper>
        <Button type="submit"> Login </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};
