export const cpfValidation = (cpf) => {
  try {
    if (cpf === '') return [true, 'Informe um cpf válido.'];
  } catch (err) {
    return [true, 'Informe seu cpf.'];
  }
  return [false, ''];
};
