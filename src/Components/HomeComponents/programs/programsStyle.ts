export const styles = {
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
        borderRadius: "20px",
        transition: "0.4s ease",
        transform: "perspective(700px) rotateX(0deg)",
    },

    image: {
        maxWidth: "120px",
        marginBottom: "15px",
    },

    cardTitle: {
        fontWeight: "900",
        fontSize: "18px",
        textTransform: "uppercase",
        color: "#5A1F3D",
        mb: 1,
    },

    cardDesc: {
        color: "#333",
        fontSize: "15px",
        maxWidth: "280px",
        margin: "0 auto",
        opacity: 0.9,
        lineHeight: "1.5",
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
        animation: "pulse 1.8s infinite",
        "&:hover": { background: "#5A1F3D", color: "#fff" },
    },
};
