import type { Appearance } from "@stripe/stripe-js";

export const stripeAppearance: Appearance = {
  theme: "night",
  labels: "above",
  variables: {
    colorPrimary: "#f2ca50",
    colorBackground: "#0c0f0f",
    colorText: "#e2e2e2",
    colorTextSecondary: "#d0c5af",
    colorTextPlaceholder: "#99907c",
    colorDanger: "#f2ca50",
    colorSuccess: "#d4af37",
    fontFamily: '"Hanken Grotesk", "Helvetica Neue", Helvetica, sans-serif',
    fontSizeBase: "16px",
    borderRadius: "0px",
    spacingUnit: "6px",
    gridRowSpacing: "20px",
    gridColumnSpacing: "16px",
    focusBoxShadow: "0 0 0 1px #f2ca50",
    focusOutline: "1px solid #f2ca50",
  },
  rules: {
    ".Input": {
      backgroundColor: "#0c0f0f",
      border: "1px solid rgb(212 175 55 / 0.25)",
      boxShadow: "none",
      color: "#e2e2e2",
      padding: "14px 16px",
    },
    ".Input:focus": {
      border: "1px solid #f2ca50",
      boxShadow: "none",
    },
    ".Input--invalid": {
      border: "1px solid #f2ca50",
    },
    ".Label": {
      color: "#d0c5af",
      fontFamily: '"Space Grotesk", "Helvetica Neue", Helvetica, sans-serif',
      fontSize: "11px",
      fontWeight: "600",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    ".Tab": {
      backgroundColor: "#171717",
      border: "1px solid rgb(212 175 55 / 0.2)",
      borderRadius: "0",
      boxShadow: "none",
    },
    ".Tab:hover": {
      backgroundColor: "#282a2b",
      border: "1px solid rgb(212 175 55 / 0.45)",
    },
    ".Tab--selected": {
      backgroundColor: "#1e2020",
      border: "1px solid #f2ca50",
      boxShadow: "none",
    },
    ".TabIcon--selected": {
      fill: "#f2ca50",
    },
    ".AccordionItem": {
      backgroundColor: "#1e2020",
      border: "1px solid rgb(212 175 55 / 0.2)",
      borderRadius: "0",
      boxShadow: "none",
      marginBottom: "16px",
      padding: "18px",
    },
    ".Block": {
      backgroundColor: "#1e2020",
      borderRadius: "0",
      boxShadow: "none",
      border: "1px solid rgb(212 175 55 / 0.2)",
      padding: "18px",
    },
    ".Error": {
      color: "#f2ca50",
      fontSize: "13px",
    },
  },
};
