export const styles = {
    about: {
        display: "flex",
        alignItems: "center",
        marginTop: "50px",
        padding: "70px",

        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row"
        },
        textAlign: {
            xs: "center",
            md: "left"
        },
        gap: {
            xs: 2,
            md: 4
        },
        justifyContent: "center",
    },

    title: {
        marginBottom: "10px",
        color: "#7D1C48",
        fontWeight: "bold",

        fontSize: {
            xs: "35px",
            sm: "25px",
            md: "60px",
        },
    },

    description: {
        lineHeight: "1.6",
        color: "#7D1C48",

        fontSize: {
            xs: "14px",
            sm: "16px",
            md: "18px",
        },
        lineHeightResponsive: {
            xs: "1.6",
            md: "1.9",
        },
        marginTop: {
            xs: "10px",
            md: "20px"
        },
    },

    leftBox: {
        maxWidth: {
            xs: "100%",
            md: "50%"
        }
    },

    rightBoxWrapper: {
        maxWidth: {
            xs: "80%",
            sm: "60%",
            md: "40%",
        },
        display: "flex",
        justifyContent: "center",
    },

    aboutImage: {
        width: "700px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "10px",
        marginLeft: "10px",

        maxWidth: {
            xs: "250px",
            sm: "300px",
            md: "450px",
        },
        widthResponsive: "100%",
    },
};
