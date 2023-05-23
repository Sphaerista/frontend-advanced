import { BugButton } from "app/providers/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <BugButton></BugButton>
      {t("Main Page")}
    </div>
  );
};

export default MainPage;
