import * as yup from 'yup';

/**
 * @Description validation for Input Text
 */
export const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be more than 3 letter').required('Name is Required Field'),
  sport: yup.string().required(),
  whatYouDo: yup.string().required('What you do is required field'),
});

/**
 * @Description Validation for Add trainee schema
 * @return validate result by yup rule
 */
export const TraineeSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be more then 3 letter.').required(),
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

/**
 * @description validation for login form
 * @input valid email and password
 * @return
 */
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email Address must be a valid email')
    .required('Email is required field'),
  password: yup.string().required('Password is required'),
});
