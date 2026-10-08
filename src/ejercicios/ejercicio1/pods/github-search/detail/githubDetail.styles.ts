export const pageContainerStyles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle at top, #1e3a8a 0%, #020617 70%)",
  p: 4,
};

export const cardStyles = {
  width: 380,
  borderRadius: 6,
  overflow: "hidden",
  background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
  border: "2px solid #3b82f6",
  boxShadow: "0 0 25px rgba(59,130,246,0.4)",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 0 40px rgba(59,130,246,0.7)",
  },
};

export const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  px: 3,
  py: 2,
  background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
};

export const titleStyles = {
  fontWeight: "bold",
  color: "white",
};

export const chipStyles = {
  backgroundColor: "#111827",
  color: "#60a5fa",
  fontWeight: "bold",
};

export const imageContainerStyles = {
  display: "flex",
  justifyContent: "center",
  mt: 4,
};

export const imageStyles = {
  width: 180,
  height: 180,
  borderRadius: "50%",
  border: "5px solid #3b82f6",
  objectFit: "cover",
  boxShadow: "0 0 25px rgba(59,130,246,0.6)",
};

export const contentContainerStyles = {
  px: 4,
  py: 4,
};

export const infoContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const infoTextStyles = {
  color: "#e5e7eb",
};

export const bioTextStyles = {
  color: "#93c5fd",
  fontStyle: "italic",
};

export const buttonContainerStyles = {
  mt: 4,
  display: "flex",
  justifyContent: "center",
};

export const backButtonStyles = {
  background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
  color: "white",
  px: 3,
  py: 1,
  borderRadius: 3,
  fontWeight: "bold",
  textTransform: "none",

  "&:hover": {
    background: "linear-gradient(90deg, #1d4ed8 0%, #0891b2 100%)",
  },
};
