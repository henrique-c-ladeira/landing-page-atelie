export const passwordValidation = (password) => {
  if (password === '') return [true, 'A senha não pode ser em branco. '];
  return [false, ''];
};
