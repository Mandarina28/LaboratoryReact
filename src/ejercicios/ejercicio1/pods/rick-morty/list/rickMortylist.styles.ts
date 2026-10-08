export const pageContainerStyles = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #1f2937 0%, #020617 70%)",
  p: 4,
};

export const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 4,
  flexWrap: "wrap",
  gap: 2,
};

export const titleStyles = {
  color: "#22c55e",
  fontWeight: "bold",
  textShadow: "0 0 12px rgba(34,197,94,0.6)",
};

export const headerButtonStyles = {
  borderRadius: 3,
  textTransform: "none",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #22c55e 0%, #06b6d4 100%)",
};

export const searchInputStyles = {
  mb: 5,
  width: "100%",
  maxWidth: 400,

  "& .MuiInputLabel-root": {
    color: "#22c55e",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#22c55e",
  },

  "& .MuiOutlinedInput-root": {
    color: "white",
    borderRadius: 4,

    "& fieldset": {
      borderColor: "#22c55e",
    },

    "&:hover fieldset": {
      borderColor: "#06b6d4",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#22c55e",
      boxShadow: "0 0 10px rgba(34,197,94,0.5)",
    },
  },
};

export const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 4,
};

export const cardStyles = {
  borderRadius: 6,
  background: "linear-gradient(180deg, #111827 0%, #0f172a 100%)",
  border: "2px solid #22c55e",
  color: "white",
  overflow: "hidden",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 0 30px rgba(34,197,94,0.5)",
  },
};

export const imageContainerStyles = {
  display: "flex",
  justifyContent: "center",
  pt: 3,
};

export const imageStyles = {
  width: 140,
  height: 140,
  borderRadius: "50%",
  border: "4px solid #22c55e",
  objectFit: "cover",
  boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
};

export const cardContentStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,
};

export const memberNameStyles = {
  fontWeight: "bold",
  textAlign: "center",
};

export const memberIdStyles = {
  color: "#22c55e",
};

export const detailButtonStyles = {
  mt: 2,
  borderRadius: 3,
  textTransform: "none",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #22c55e 0%, #06b6d4 100%)",
};

export const paginationContainerStyles = {
  mt: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
};

export const previousButtonStyles = {
  borderColor: "#22c55e",
  color: "#22c55e",
  borderRadius: 3,
};

export const nextButtonStyles = {
  borderRadius: 3,
  background: "linear-gradient(90deg, #22c55e 0%, #06b6d4 100%)",
};

export const pageTextStyles = {
  color: "white",
};
