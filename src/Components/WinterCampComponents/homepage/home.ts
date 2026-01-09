export const bannerStyles = {
    container: {
        position: "relative",
        backgroundImage: `url("/Banner.png")`,
        backgroundColor: "rgba(2, 15, 3, 0.62)",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: 320, sm: 420, md: 520, lg: 560 },
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    title: {
        fontWeight: "bold",
        fontSize: { xs: 22, sm: 36, md: 46 },
    },

    searchBox: {
        position: "absolute",
        bottom: -45,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
        px: { xs: 2, md: 4 },
        py: 3,
        display: "flex",
        alignItems: "center",
        gap: 3,
        width: { xs: "90%", md: "80%", lg: "70%" },
        zIndex: 10,
    },

    dateBox: {
        flex: 1,
    },

    dateLabel: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "#7A1E3C",
        fontWeight: 600,
        fontSize: 13,
        mb: 0.5,
    },

    dateValue: {
        fontWeight: 600,
        color: "#333",
    },

    divider: {
        width: "1px",
        height: 45,
        backgroundColor: "#e0e0e0",
        display: { xs: "none", md: "block" },
    },

    button: {
        backgroundColor: "#7A1E3C",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        padding: "0.5rem 2rem",
        borderRadius: "10px",
    },

    spacer: {
        height: 80,
    },
};
