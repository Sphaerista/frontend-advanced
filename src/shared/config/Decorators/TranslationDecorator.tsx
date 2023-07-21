import { Decorator } from "@storybook/react";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { Loader } from "shared/ui/Loader/Loader";

const TranslationDecorator: Decorator = (Story) => (
  <I18nextProvider i18n={i18nForTests}>
    <Suspense fallback={<Loader />}>
      <Story />
    </Suspense>
  </I18nextProvider>
);

export default TranslationDecorator;
