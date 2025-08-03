
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

export const schemaCreateIngredient = yup.object().shape({
  name: yup.string().required('Название обязательно'),
  stock: yup
    .number()
    .typeError('Введите число')
    .positive('Количество должно быть больше 0')
    .integer('Целое число')
    .required('Укажите количество'),
  costPerUnit: yup
    .number()
    .typeError('Введите число')
    .positive('Цена должна быть больше 0')
    .required('Укажите цену за единицу'),
  category: yup.string().required('Категория обязательна'),
  unit: yup.string().required('Еденица измерения обязательна'),
});


export const schemaCreateDish = yup.object().shape({
  name: yup.string().required('Название обязательно'),
  category: yup.string().required('Категория обязательна'),
  percent: yup
    .number()
    .typeError('Процент должен быть числом')
    .required('Укажите процент наценки')
    .min(0, 'Не может быть меньше 0')
    .max(1000, 'Не может быть больше 1000'),
  isAvailable: yup.boolean().required('Укажите доступность'),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        ingredient: yup.string().required('Ингредиент обязателен'),
        quantity: yup
          .number()
          .typeError('Количество должно быть числом')
          .required('Укажите количество')
      })
    )
    .min(1, 'Добавьте хотя бы один ингредиент')
    .required('Ингредиенты обязательны'),
    photo: yup
  .mixed()
  .test(
    'fileSize',
    'Файл слишком большой (максимум 5 МБ)',
    value => !value || (value.size <= 5 * 1024 * 1024) 
  )
  .test(
    'fileType',
    'Неверный формат файла',
    value =>
      !value ||
      ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'].includes(value.type)
  )
  .nullable()
});







export default schema