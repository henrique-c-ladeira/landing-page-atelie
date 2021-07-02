export const classificationValidation = (classification) => {
  if (classification === '') return [true, 'É necessário informar a categoria.'];
  return [false, ''];
};
