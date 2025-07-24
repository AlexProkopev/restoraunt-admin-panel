import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().min(3, "User name должен содержать минимум 6 символов").required("Email обязателен для заполнения"),
  password: Yup.string().min(6, "Пароль должен содержать минимум 6 символов").required("Пароль обязателен для заполнения"),
});