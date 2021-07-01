import React, { useState } from 'react';
import { Button, FormField, Select } from '../../../components';
import { ButtonWrapper, FormContainer } from '../styles';

export const SignupForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [company, setCompany] = useState('');
  const [classification, setClassification] = useState('');

  const handleChange = (setState) => (event) => setState(event.target.value);

  return (
    <FormContainer onSubmit={(event) => {
      handleSubmit({
        name, cpf, email, password, confirmPassword, company, classification,
      });
      event.preventDefault();
    }}
    >
      <FormField onChange={handleChange(setName)} fullWidth label="Nome" placeholder="Nome" />
      <FormField onChange={handleChange(setCpf)} fullWidth mask="999.999.999-99" label="CPF" placeholder="CPF" />
      <FormField onChange={handleChange(setEmail)} fullWidth label="E-mail" placeholder="E-mail" />
      <FormField onChange={handleChange(setPassword)} fullWidth label="Senha" placeholder="Digite sua senha" />
      <FormField onChange={handleChange(setConfirmPassword)} fullWidth label="Senha" placeholder="Confirme sua senha" />
      <FormField onChange={handleChange(setCompany)} fullWidth label="Empresa" placeholder="Empresa" />

      <Select list={['Gerente', 'Revendedor', 'Distribuidor']} onChange={handleChange(setClassification)} />

      <ButtonWrapper>
        <Button type="submit"> Enviar </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};
