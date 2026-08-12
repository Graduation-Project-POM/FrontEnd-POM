import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Single source of truth for language direction.
 *
 * Every layout in the app is built with CSS *logical* properties
 * (marginInline, paddingInlineStart, insetInlineEnd …) so flipping `dir` on the
 * root element is enough to mirror the entire interface — no per-component
 * `isRTL ? "row-reverse" : "row"` branching, which is what the old code did in
 * a dozen places (and got wrong in a few of them).
 */
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
