export const pageContainerStyles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle at top, #1f2937 0%, #020617 70%)",
  p: 4,
};

export const cardStyles = {
  width: 360,
  borderRadius: 6,
  overflow: "hidden",
  position: "relative",
  background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
  border: "2px solid #22c55e",
  boxShadow: "0 0 25px rgba(34,197,94,0.4)",
  transition: "0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 0 40px rgba(34,197,94,0.7)",
  },
};

export const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  px: 3,
  py: 2,
  background: "linear-gradient(90deg, #22c55e 0%, #06b6d4 100%)",
};

export const titlesStyles = {
  fontWeight: "bold",
  color: "#fff",
  textShadow: "0 2px 6px rgba(0,0,0,0.4)",
};

export const chipStyles = {
  backgroundColor: "#111827",
  color: "#22c55e",
  fontWeight: "bold",
};

export const imageContainerStyles = {
  display: "flex",
  justifyContent: "center",
  mt: 4,
};

export const imageStyles = {
  width: 220,
  height: 220,
  objectFit: "cover",
  borderRadius: "50%",
  border: "6px solid #22c55e",
  backgroundColor: "#fff",
  boxShadow: "0 0 30px rgba(34,197,94,0.6)",
};

export const contentContainerStyles = {
  px: 4,
  py: 4,
};

export const boxContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const infoTextStyles = {
  color: "#e5e7eb",
};

export const buttonContainerStyles = {
  mt: 4,
  display: "flex",
  justifyContent: "center",
};

export const backButtonStyles = {
  background: "linear-gradient(90deg, #22c55e 0%, #06b6d4 100%)",
  color: "white",
  px: 3,
  py: 1,
  borderRadius: 3,
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    background: "linear-gradient(90deg, #16a34a 0%, #0891b2 100%)",
  },
};
