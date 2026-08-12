import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useDirection() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isRTL = lang === "ar";

  useEffect(() => {
    const root = document.documentElement;
    root.dir = isRTL ? "rtl" : "ltr";
    root.lang = lang;
  }, [isRTL, lang]);

  const toggle = () => i18n.changeLanguage(isRTL ? "en" : "ar");

  return { isRTL, lang, dir: (isRTL ? "rtl" : "ltr") as "rtl" | "ltr", toggle };
}

export default useDirection;
