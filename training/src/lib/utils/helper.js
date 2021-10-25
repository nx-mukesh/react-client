import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be more than 3 letter').required("Name is Required Field"),
  sport: yup.string().required(),
  whatYouDo: yup.string().required('What you do is required field'),
});

export const TraineeSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name should be more then 3 letter.')
    .required(),
  email: yup.string().email('email should be valid').required(),
  password: yup
    .string()
    .min(8, 'Must contain 8 characters , at least one uppercase, one number and one symbols')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});