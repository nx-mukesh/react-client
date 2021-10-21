import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  selectSport: yup.string().required('Sport is required field'),
  whatYouDo: yup.string().required('What you do is required'),
});

// export const hasError = (value) => {};



/**
 * @description validation for login form
 * @input valid email and password
 * @return
 */
export const loginSchema = yup.object().shape({
  email:yup.string().email('Email Address must be a valid email').required('Email is required field'),
  password:yup.string().required('Password is required')
})
