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

export const SignupForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [company, setCompany] = useState('');
  const [classification, setClassification] = useState('');

  const [nameStatus, setNameStatus] = useState({ error: false, message: '' });
  const [cpfStatus, setCpfStatus] = useState({ error: false, message: '' });
  const [emailStatus, setEmailStatus] = useState({ error: false, message: '' });
  const [passwordStatus, setPasswordStatus] = useState({ error: false, message: '' });
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState({ error: false, message: '' });
  const [companyStatus, setCompanyStatus] = useState({ error: false, message: '' });
  const [classificationStatus, setClassificationStatus] = useState({ error: false, message: '' });

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
    const nameError = validate(name, setNameStatus, nameValidation);
    const passwordError = validate(password, setPasswordStatus, passwordValidation);
    const emailError = validate(email, setEmailStatus, emailValidation);
    const cpfError = validate(cpf, setCpfStatus, cpfValidation);
    const confirmPaswordError = validate(
      confirmPassword, setConfirmPasswordStatus, passwordValidation,
    );
    const companyStatusError = validate(company, setCompanyStatus, companyValidation);
    const classificationError = validate(
      classification, setClassificationStatus, classificationValidation,
    );
    const passwordMatchError = password !== confirmPassword;
    if (!(
      nameError || cpfError || emailError
        || passwordError || confirmPaswordError || companyStatusError
        || classificationError || passwordMatchError
    )) {
      handleSubmit({
        name, cpf, email, password, confirmPassword, company, classification,
      });
    }
    event.preventDefault();
  };

  const handleChange = (setState) => (event) => setState(event.target.value);

  return (
    <FormContainer onSubmit={submitForm}>
      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={name} onChange={handleChange(setName)} fullWidth label="Nome" placeholder="Nome" />
          {nameStatus.error && <ErrorText>{nameStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={cpf} onChange={handleChange(setCpf)} fullWidth mask="999.999.999-99" label="CPF" placeholder="CPF" />
          {cpfStatus.error && <ErrorText>{cpfStatus.message}</ErrorText>}
        </div>
        <div style={{ flex: 1 }}>
          <FormField value={email} onChange={handleChange(setEmail)} fullWidth label="E-mail" placeholder="E-mail" />
          {emailStatus.error && <ErrorText>{emailStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={password} onChange={handleChange(setPassword)} fullWidth type="password" label="Senha" placeholder="Digite sua senha" />
          {passwordStatus.error && <ErrorText>{passwordStatus.message}</ErrorText>}
          {(password !== confirmPassword)
      && <ErrorText>A senha deve coincidir com a confirma????o.</ErrorText>}
        </div>

        <div style={{ flex: 1 }}>
          <FormField value={confirmPassword} onChange={handleChange(setConfirmPassword)} fullWidth type="password" label="Confirme sua senha" placeholder="Confirme sua senha" />
          {confirmPasswordStatus.error && <ErrorText>{confirmPasswordStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <div style={{ flex: 1 }}>
          <FormField value={company} onChange={handleChange(setCompany)} fullWidth label="Empresa" placeholder="Empresa" />
          {companyStatus.error && <ErrorText>{companyStatus.message}</ErrorText>}
        </div>

        <div style={{ flex: 1 }}>
          <Select value={classification} list={['Gerente', 'Revendedor', 'Distribuidor']} onChange={handleChange(setClassification)} />
          {classificationStatus.error && <ErrorText>{classificationStatus.message}</ErrorText>}
        </div>
      </FormFieldWrapper>

      <Gap />
      <ButtonWrapper>
        <Button type="submit"> Enviar </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};
