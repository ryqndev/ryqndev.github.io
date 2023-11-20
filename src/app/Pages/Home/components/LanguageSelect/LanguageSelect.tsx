import clsx from "clsx";
import { useEffect, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "./assets/globe.svg?react";
import cn from "./LanguageSelect.module.scss";

const supportedLanguages = ["en", "es", "zh"];

export function LanguageSelect({ visible }: { visible: boolean }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    supportedLanguages.indexOf(i18n.language) < 0
      ? 0
      : supportedLanguages.indexOf(i18n.language)
  );

  useEffect(() => {
    i18n.changeLanguage(supportedLanguages[language]);
  }, [i18n, language]);

  function toggle() {
    setLanguage((prev) => ++prev % supportedLanguages.length);
  }

  return (
    <div
      className={clsx(cn.container, visible && cn.visible)}
      onClick={toggle}
      data-mouse-hover="button"
      data-mouse-hover-text="change the language"
    >
      <LanguageIcon
        data-mouse-hover="button"
        data-mouse-hover-text="change the language"
      />
      {t("en")}
    </div>
  );
}