import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.UK, content: Country.UK },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect: React.FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();
  console.log(value, options, readonly);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      readonly={readonly}
      defaultValue={t("Country")}
      value={value}
      items={options}
      onChange={onChangeHandler}
      direction={"top right"}
      label={t("Country")}
      className={classNames("", {}, [className])}
    />
  );

  // return (
  //   <Select
  //     className={classNames("", {}, [className])}
  //     label={t("Country")}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // );
});
