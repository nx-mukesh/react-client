import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  selectSport: yup.string().required('Sport is required field'),
  whatYouDo: yup.string().required('What you do is required'),
});

export const hasError = (value) => {};
