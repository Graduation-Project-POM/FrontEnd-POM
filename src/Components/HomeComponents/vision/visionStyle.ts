export const styles = {
    visionContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        gap: { xs: 1.5, md: 0 },
        textAlign: { xs: "center", md: "left" },
        mb: 3,
    },

    title: {
        color: "#7D1C48",
        fontWeight: "bold",
        flex: 1,
        fontSize: { xs: "40px", sm: "46px", md: "52px", lg: "64px" },
        padding: { xs: "0 10px", md: "70px 150px" },
        textAlign: { xs: "center", md: "left" },
        textShadow: "0px 3px 6px rgba(27, 27, 27, 0.15)",
    },

    controlsWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: { xs: 1.5, sm: 2, md: 3 },
        mt: { xs: 1.5, md: 0 },
        p: { xs: "0 10px", md: "70px 150px" },
    },

    controlBtn: {
        background: "#7A1731",
        color: "white",
        "&:hover": { background: "#5a0f24" },
        p: { xs: 0.8, sm: 1.2, md: 1.8 },
        borderRadius: "50%",
        transition: "0.3s",
    },

    image: {
        width: { xs: "150px", sm: "250px", md: "400px" },
        height: "auto",
        margin: { xs: 0, md: "10px -70px" },
        zIndex: 10,
        animation: "float 3.8s ease-in-out infinite",
    },

    slidesWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: { xs: 1, sm: 2, md: 3 },
        width: { xs: "75%", sm: "70%", md: "60%" },
        flexWrap: "wrap",
        transition: "0.4s ease",
    },

    slideCard: {
        width: { sm: "200px", md: "240px" },
        height: { sm: "160px", md: "280px" },
        padding: "12px",
        borderRadius: "16px",
        backgroundColor: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "all 0.35s ease",
    },

    slideTitle: {
        fontWeight: "bold",
        color: "#7A1731",
        mb: 1,
    },

    slideText: {
        color: "gray",
        px: 1,
        fontSize: "15px",
    },
};
