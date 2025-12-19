export const styles = {
    container: {
        minHeight: "90vh",
        p: 4,
        paddingTop: "10rem"
    },

    heroWrapper: { textAlign: "center", mb: 6 },
    heroTitle: { fontWeight: "bold", mb: 2 },
    heroDesc: { maxWidth: 600, mx: "auto" },

    grid: {
        display: "grid",
        gap: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
        justifyContent: "center",
    },

    card: (color: string) => ({
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        p: 2,
        background: `linear-gradient(135deg, ${color}20, ${color}40)`,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
        },
    }),

    iconBox: (color: string) => ({
        fontSize: 36,
        mb: 2,
        display: "inline-block",
        p: 1.5,
        borderRadius: 2,
        background: `${color}33`,
    }),

    cardTitle: { fontWeight: "bold", mb: 1 },
    cardDesc: { mb: 2, color: "#333" },

    button: (color: string) => ({
        backgroundColor: color,
        "&:hover": {
            backgroundColor: color + "cc",
        },
    }),
};
