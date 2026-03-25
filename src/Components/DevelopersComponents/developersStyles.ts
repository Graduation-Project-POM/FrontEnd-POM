export const styles = {
  page: {
    padding: "10px 40px",
    background: "#f2f2f2",
  },

  contentWrapper: {
    margin: "0 auto",
  },


  title: {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: 900,
    color: "#1f1d1dff",
    letterSpacing: "-0.03em",
    marginBottom: "20px",
    marginTop: "15px",
  },

  divider: {
    width: "50px",
    height: "5px",
    background: "#7A1E3C",
    borderRadius: "2px",
    margin: "0 auto 50px",
  },

  section: {
    marginBottom: "60px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "11px",
    color: "#999",
    fontWeight: 700,
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "32px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "32px 20px 24px",
    textAlign: "center",
    flex: "1 1 0",
    minWidth: "160px",
    maxWidth: "240px",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "default",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },

  cardHover: {
    transform: "translateY(-1px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
  },

  avatarWrapper: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "0 auto 18px",
    padding: "3px",
    background: "linear-gradient(135deg, #7A1E3C 0%, #d4748a 100%)",
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },

  name: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1a1a",
    letterSpacing: "-0.01em",
    marginBottom: "4px",
  },

  role: {
    fontSize: "10px",
    color: "#7A1E3C",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },

  bio: {
    fontSize: "12.5px",
    color: "#666",
    lineHeight: 1.6,
  },

  socialButton: {
    width: "30px",
    height: "30px",
    minWidth: "30px",
    borderRadius: "8px",
    background: "transparent",
    border: "1px solid #e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "#555",
    padding: 0,
    "&:hover": {
      background: "#7A1E3C",
      border: "1px solid #7A1E3C",
      color: "#ffffff",
    },
  },
};