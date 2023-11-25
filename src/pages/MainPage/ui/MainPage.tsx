import { BugButton } from "app/providers/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/Popups/ui/ListBox/ListBox";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <Page>
      <BugButton></BugButton>
      {t("Main Page")}
      <div>a</div>
      <div>B</div>
      <HStack>
        <div></div>
        <ListBox
          defaultValue="def value"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { value: "1", content: "aaa" },
            { value: "2", content: "bbb", disabled: true },
            { value: "3", content: "ccc" },
          ]}
        />
      </HStack>
      <div>c</div>
      <div>d</div>
    </Page>
  );
};

export default MainPage;
