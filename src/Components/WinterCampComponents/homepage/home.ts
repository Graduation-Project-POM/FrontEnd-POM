export const bannerStyles = {
    container: {
        pt:{ xs: 20, md: 0 },
        position: "relative",
        backgroundImage: `url("/all.jpg")`,
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
        px: { xs: 2, sm: 4 },
    },

    title: {
        fontWeight: "bold",
        fontSize: { xs: "1.4rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
        lineHeight: 1.3,
    },

    searchBox: {
        position: { xs: "static", md: "absolute" }, 
        bottom: { md: -45 },
        left: "50%",
        transform: { md: "translateX(-50%)", xs: "none" },
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
        px: { xs: 2, md: 4 },
        py: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, 
        alignItems: "center",
        gap: 2,
        width: { sm: "50%", md: "60%", lg: "50%" },
        zIndex: 10,
        mx: { xs: "auto" },
        mt: { xs: 8, md: 0 }, 
    },


    dateBox: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "flex-start", md: "flex-start" },
        mb: { xs: 2, md: 0 },
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
        width: { xs: "100%", md: "auto" },
    },

    spacer: {
        height: { xs: 60, md: 80 },
    },
};