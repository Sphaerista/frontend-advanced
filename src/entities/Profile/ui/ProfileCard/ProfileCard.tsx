import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { AlignText, Text, ThemeText } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import { HStack, VStack } from "shared/ui/Stack";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeAvatar,
    onChangeCity,
    onChangeCountry,
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames("", { [cls.loading]: true }, [className])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames("", {}, [className, cls.error])}
      >
        <Text
          title={t("Error occured")}
          text={t("Please refresh the page")}
          theme={ThemeText.ERROR}
          align={AlignText.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      max
      gap="16"
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        placeholder={t("Firstname")}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t("Lastname")}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t("Age")}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t("Avatar")}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t("City")}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
