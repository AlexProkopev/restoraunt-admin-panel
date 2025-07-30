
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{12}$/, 'Введите корректный номер телефона без +')
    .required('Телефон обязателен'),
  date: yup.string().required('Дата обязательна'),
  guests: yup
    .number()
    .typeError('Введите число')
    .positive('Количество гостей должно быть больше 0')
    .integer('Целое число')
    .required('Укажите количество гостей'),
  table: yup.string().required('Выберите стол'),
  notes: yup.string().max(300, 'Макс. 300 символов'),
});

export const schemaCreateTable = yup.object().shape({
 number: yup.number().required('Номер стола обязателен'),
  seats: yup
    .number()
    .required('Количество гостей обязателено'),
    
  location: yup.string().required('Локация обязательна'),
});

export const schemaCreateGuest = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{12}$/, 'Введите корректный номер телефона без +')
    .required('Телефон обязателен'),


});

export default schema