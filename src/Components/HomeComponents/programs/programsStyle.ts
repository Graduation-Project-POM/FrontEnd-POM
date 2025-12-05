export const styles= {
    container: {
        textAlign: "center",
        py: 5,
    },

    title: {
        fontSize: "52px",
        fontWeight: "700",
        color: "#5A1F3D",
        mb: 4,
        mt: 20,
    },

    gridContainer: {
        maxWidth: "1200px",
        margin: "0 auto",
    },

    card: {
        p: 3,
        textAlign: "center",
        boxShadow: "none",
        background: "transparent",
        transition: "0.3s ease",
        borderRadius: "20px",
        "&:hover": {
            transform: "translateY(-10px) scale(1.05)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
        },
    },

    image: {
        maxWidth: "120px",
        marginBottom: "15px",
    },

    cardTitle: {
        fontWeight: "700",
        fontSize: "18px",
        textTransform: "uppercase",
        color: "#5A1F3D",
        mb: 1,
    },

    cardDesc: {
        color: "#555",
        fontSize: "15px",
        maxWidth: "280px",
        margin: "0 auto",
    },

    exploreBtnWrapper: {
        mt: 5,
    },

    exploreBtn: {
        background: "#fff",
        border: "2px solid #5A1F3D",
        px: 4,
        py: 1.5,
        borderRadius: "30px",
        fontWeight: "600",
        color: "#5A1F3D",
        display: "inline-block",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { background: "#5A1F3D", color: "#fff" },
    },
};