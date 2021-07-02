export const companyValidation = (company) => {
  if (company === '') return [true, 'É necessário informar a empresa.'];
  return [false, ''];
};
