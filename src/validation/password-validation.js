export const passwordValidation = (password) => {
  if (password === '') return [true, 'A senha não pode ser em branco e deve coincidir com a confirmação de senha. '];
  return [false, ''];
};
