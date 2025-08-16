import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Button,
  TextField,
  Typography,
  Box,
  Slide,
  useTheme,
} from '@mui/material';
import { selectIsError, selectIsLoading } from '../../redux/authentification/authentication.selectors';
import { useForm } from './useForm';
import { button, container, inputField, title } from './Login.styles';
import { fetchUser } from '../../redux/authentification/services';
import { HOME_PAGE } from '../../routes/Routes';
import Loader from '../../components/Loader/Loader';
import { Notify } from 'notiflix';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const location = useLocation();
  const { formData, errors, handleChange, validate, setErrors } = useForm({
    username: '',
    password: '',
  });
  const from = location.state?.from?.pathname || HOME_PAGE;
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        fetchUser({ username: formData.username, password: formData.password })
      )
        .unwrap()
        .then(() => navigate(from, { replace: true }))
        .catch(() => {
          enqueueSnackbar('Ошибка при входе, попробуйте снова', {
            variant: 'error',
          });
        });
    } else {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => {
        enqueueSnackbar(error, { variant: 'error' });
      });
    }
  };

  if (isLoading) return <Loader />;
  if (isError) Notify.failure(`Ошибка '${isError}', попробуйте снова`);
  console.log(isError);


  return (
    <>
      <Slide direction="left" in={true} timeout={750}>
        <Box sx={container}>
          <Typography sx={title}>Доступ к панели</Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                name="username"
                label="Ваш логин пользователя"
                variant="outlined"
                fullWidth
                value={formData.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
                required
                sx={inputField(errors.username)}
              />
            </Box>
            <Box mb={2}>
              <TextField
                name="password"
                label="Пароль"
                type="password"
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                required
                sx={inputField(errors.password)}
              />
            </Box>
            <Box>
              <Button type="submit" sx={button(theme)}>
                Войти
              </Button>
            </Box>
          </form>
        </Box>
      </Slide>
    </>
  );
};

export default Login;
