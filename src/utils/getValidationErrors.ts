import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationsErros(err: ValidationError): IErrors {
  const validationsErrors: IErrors = {};
  err.inner.forEach(error => {
    validationsErrors[error.path] = error.message;
  });
  return validationsErrors;
}
