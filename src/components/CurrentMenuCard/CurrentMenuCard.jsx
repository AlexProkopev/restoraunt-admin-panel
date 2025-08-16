import { Box, Card, CardContent, ListItem, Typography } from "@mui/material";

function DishCard({ dish }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Card
        sx={{
          position: "relative",
          width: 220,
          minHeight: 250,
          overflow: "hidden",
          borderRadius: 3,
          background: "linear-gradient(145deg, #1e1e1e, #2a2a2a)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.8)",
          },
        }}
      >
        <Box
          component="img"
          src={dish.photo}
          alt={dish.name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6) contrast(1.1)",
            zIndex: 0,
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            backdropFilter: "blur(6px)",
            background: "rgba(0,0,0,0.35)",
            borderRadius: 2,
            margin: 2,
            padding: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            transition: "background 0.3s ease",
            "&:hover": {
              background: "rgba(0,0,0,0.55)",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            {dish.name}
          </Typography>
       
          <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
            {dish.price.toFixed(2)} ₽
          </Typography>
        
          <Typography variant="body1" sx={{ opacity: 0.85 }}>
            Вес {dish.weight} г
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default DishCard;
