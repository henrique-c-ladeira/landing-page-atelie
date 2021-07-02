export const nameValidation = (name) => {
  if (name === '') return [true, 'Informe seu nome.'];
  return [false, ''];
};
