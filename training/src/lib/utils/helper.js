import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be more than 3 letter').required("Name is Required Field"),
  sport: yup.string().required(),
  whatYouDo: yup.string().required("What you do is required field")
});


