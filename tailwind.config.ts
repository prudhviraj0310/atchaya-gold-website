import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-red": "var(--brand-red)",
                "brand-red-dark": "#c4191d", // darker shade of #E41F24
                "mint-bg": "var(--mint-bg)",
                "light-bg": "var(--light-bg)",
                "brand-teal": "var(--brand-teal)",
                "text-dark": "var(--text-dark)",
                "text-muted": "var(--text-muted)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
            },
        },
    },
    plugins: [],
};
export default config;
