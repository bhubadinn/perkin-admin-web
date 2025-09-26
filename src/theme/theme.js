import {createTheme} from "@mui/material/styles";

// Custom color palette
const colors = {
  black: "#000000",
  lightGreen: "#CFFFE2", 
  teal: "#A2D5C6",
  lightGray: "#F6F6F6"
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal,
      light: colors.lightGreen,
      dark: "#7BC4B0",
      contrastText: colors.black,
    },
    secondary: {
      main: colors.black,
      light: "#333333",
      dark: "#000000",
      contrastText: colors.lightGray,
    },
    background: {
      default: colors.lightGray,
      paper: "#FFFFFF",
    },
    text: {
      primary: colors.black,
      secondary: "#666666",
    },
    success: {
      main: colors.teal,
      light: colors.lightGreen,
      dark: "#7BC4B0",
    },
    info: {
      main: colors.teal,
      light: colors.lightGreen,
      dark: "#7BC4B0",
    },
    warning: {
      main: "#FFA726",
      light: "#FFB74D",
      dark: "#F57C00",
    },
    error: {
      main: "#F44336",
      light: "#EF5350",
      dark: "#D32F2F",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      color: colors.black,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
      color: colors.black,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      color: colors.black,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: colors.black,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: colors.black,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: colors.black,
    },
    body1: {
      color: colors.black,
    },
    body2: {
      color: "#666666",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 24px",
          transition: "all 0.3s ease",
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.lightGreen} 100%)`,
          color: colors.black,
          boxShadow: `0 4px 14px 0 ${colors.teal}40`,
          "&:hover": {
            background: `linear-gradient(135deg, #7BC4B0 0%, ${colors.teal} 100%)`,
            boxShadow: `0 6px 20px 0 ${colors.teal}60`,
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderColor: colors.teal,
          color: colors.teal,
          "&:hover": {
            borderColor: colors.teal,
            backgroundColor: `${colors.teal}10`,
          },
        },
        text: {
          color: colors.teal,
          "&:hover": {
            backgroundColor: `${colors.teal}10`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: `0 4px 6px -1px ${colors.black}10, 0 2px 4px -1px ${colors.black}06`,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: `0 10px 25px -3px ${colors.black}10, 0 4px 6px -2px ${colors.black}05`,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "all 0.3s ease",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.teal,
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.teal,
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.lightGreen} 100%)`,
          color: colors.black,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;