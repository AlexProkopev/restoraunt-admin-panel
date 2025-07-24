export const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
  padding: 2,
};

export const title = {
  fontSize: "2rem",
  marginBottom: 2,
};

export const inputField = (error) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : undefined,
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
});

export const button = (theme) => ({
  
  margin: "0 auto",
  backgroundColor: theme.palette.customColors.buttonHoverBg,
  color: theme.palette.customColors.buttonText,
  textAlign: "center",
  padding: "10px 40px",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
});

export const link = {
  marginTop: 15,
};
