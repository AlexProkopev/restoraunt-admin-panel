import { Box, InputLabel, Typography, FormHelperText, Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { iconPhotoUpload, labelPhotoUpload, wrapperPhotoUpload } from '../CreateDishForm.style';

function PhotoUploadFields({ form, errors, handleFileChange, setForm }) {
  const { photo } = form;
  const handleDeletePhoto = () => {
    setForm((prev) => ({ ...prev, photo: null }));
  };
  return (
    <Box sx={wrapperPhotoUpload}>
      <InputLabel htmlFor="photo" sx={labelPhotoUpload}> <PhotoCamera sx={iconPhotoUpload} />Загрузить фото блюда</InputLabel>
      <input style={{ display: 'none' }} id="photo" name="photo" type="file" accept="image/*" onChange={handleFileChange} />
      {photo && <Typography variant="body2" color="text.secondary" sx={{ ml: 0 }}>Выбран файл: <strong>{photo.name}</strong></Typography>}
      {errors.photo && <FormHelperText error sx={{ mt: 0 }}> {errors.photo} </FormHelperText>}
      {photo && <Button onClick={handleDeletePhoto}>Удалить фото</Button>}
    </Box>
  );
}

export default PhotoUploadFields;
