import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/index";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";

interface profilePageProps {
  className?: string;
}

const ProfilePage: React.FC<profilePageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
