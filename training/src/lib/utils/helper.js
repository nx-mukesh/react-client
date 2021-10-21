import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be more then 3 latter').required("Name is Required Field"),
  sport: yup.string().required(),
  whatYouDo: yup.string().required()
});

// export const getError = (validationSchema, formData) =>
//   validationSchema
//     .validate(formData, { abortEarly: false })
//     .then(console.log('formData', formData))
//     .catch((event) => {
//       console.log('event', event);
//       return event.errors;
//     });

export const hasError = (label) => {
  isTouched();
  // return getError();
};

export const isTouched = () => {
  return true;
};
