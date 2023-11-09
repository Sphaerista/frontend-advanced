import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <Page>
      {t("About Page")}
      <Counter />
    </Page>
  );
};

export default AboutPage;
