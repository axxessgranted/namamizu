import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#1f2937",
            lineHeight: "1.75",
            fontSize: "1.05rem",

            h1: {
              fontWeight: "700",
              letterSpacing: "-0.02em",
            },
            h2: {
              fontWeight: "600",
              marginTop: "2.5rem",
            },
            h3: {
              fontWeight: "600",
            },

            a: {
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
              },
            },

            blockquote: {
              borderLeftColor: "#e5e7eb",
              fontStyle: "normal",
              color: "#374151",
            },

            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },

            pre: {
              backgroundColor: "#111827",
              color: "#e5e7eb",
              borderRadius: "0.75rem",
            },

            img: {
              borderRadius: "0.75rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
