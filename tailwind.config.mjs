module.exports = {
    content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0d6efd",
                accent: "#ff7712",
                brand: "#035AA7",
                skybrand: "#14b8ff",
                topbar: "#eff2f5",
                header: "#bdc3c7",
                ink: "#515050",
            },
            fontFamily: {
                sans: ["Open Sans", "ui-sans-serif", "system-ui"],
                display: ["Raleway", "ui-sans-serif", "system-ui"],
            },
            boxShadow: {
                modal: "0 10px 25px rgba(0,0,0,0.4)",
            },
            keyframes: {
                modalFadeIn: {
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                modalFadeIn: "modalFadeIn .3s ease",
            },
        },
    },
    plugins: [],
}
