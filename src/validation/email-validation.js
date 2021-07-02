export const emailValidation = (email) => {
  try {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = re.test(email.toLowerCase());
    if (!isValidEmail) return [true, 'Informe um email válido.'];
  } catch (err) {
    return [true, 'Informe um email válido.'];
  }
  return [false, ''];
};
