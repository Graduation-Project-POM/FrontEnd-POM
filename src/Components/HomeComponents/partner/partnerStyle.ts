export const styles = {
    title: {
        marginBottom: "10px",
        color: "#7D1C48",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "80px",

        fontSize: {
            xs: "30px",
            sm: "50px",
            md: "90px",
        },
        marginBottomResponsive: {
            xs: "20px",
            md: "40px",
        },
    },

    partnerWrapper: {
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "row",
            md: "row"
        },
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: {
            xs: "20px",
            sm: "40px",
            md: "50px"
        },
        padding: {
            xs: "0 10px",
            md: "0"
        },
    },

    partnerImage1: {
        width: {
            xs: "100px",
            sm: "170px",
            md: "290px"
        },
        height: "auto",
        borderRadius: "10px",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },

    partnerImage2: {
        width: {
            xs: "100px",
            sm: "200px",
            md: "320px"
        },
        height: "auto",
        borderRadius: "10px",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },

    partnerImage3: {
        width: {
            xs: "100px",
            sm: "200px",
            md: "320px"
        },
        height: "auto",
        borderRadius: "10px",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },

    verticalLine: {
        display: {
            xs: "none",
            lg: "block"
        },
        width: "5px",
        height: "250px",
        backgroundColor: "#7D1C48",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scaleY(1.1)",
        }
    }
};
