export const pageContainerStyles = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #1e293b 0%, #020617 70%)",
  p: 4,
};

export const titleStyles = {
  color: "#60a5fa",
  fontWeight: "bold",
  mb: 4,
  textShadow: "0 0 12px rgba(59,130,246,0.5)",
};

export const searchContainerStyles = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

export const searchInputStyles = {
  width: "100%",
  maxWidth: 350,

  "& .MuiInputLabel-root": {
    color: "#60a5fa",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#60a5fa",
  },

  "& .MuiOutlinedInput-root": {
    color: "white",
    borderRadius: 4,

    "& fieldset": {
      borderColor: "#3b82f6",
    },

    "&:hover fieldset": {
      borderColor: "#06b6d4",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#60a5fa",
      boxShadow: "0 0 10px rgba(59,130,246,0.4)",
    },
  },
};

export const membersGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 4,
};

export const cardStyles = {
  minHeight: 320,
  borderRadius: 6,
  background: "linear-gradient(180deg, #111827 0%, #0f172a 100%)",
  border: "1px solid #3b82f6",
  color: "white",
  overflow: "hidden",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 0 25px rgba(59,130,246,0.5)",
  },
};

export const imageContainerStyles = {
  display: "flex",
  justifyContent: "center",
  pt: 3,
};

export const imageStyles = {
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: "4px solid #3b82f6",
  objectFit: "cover",
  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
};

export const cardContentStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,
};

export const memberLoginStyles = {
  fontWeight: "bold",
};

export const memberIdStyles = {
  color: "#60a5fa",
};

export const detailButtonStyles = {
  mt: 2,
  borderRadius: 3,
  textTransform: "none",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
};

export const paginationContainerStyles = {
  mt: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
};

export const previousButtonStyles = {
  borderColor: "#3b82f6",
  color: "#60a5fa",
  borderRadius: 3,
  textTransform: "none",

  "&:hover": {
    borderColor: "#06b6d4",
    backgroundColor: "rgba(59,130,246,0.1)",
  },
};

export const pageTextStyles = {
  color: "white",
  fontWeight: "bold",
};

export const nextButtonStyles = {
  borderRadius: 3,
  textTransform: "none",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",

  "&:hover": {
    background: "linear-gradient(90deg, #1d4ed8 0%, #0891b2 100%)",
  },
};
