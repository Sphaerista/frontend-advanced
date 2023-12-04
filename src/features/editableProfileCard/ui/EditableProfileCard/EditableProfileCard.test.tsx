import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "shared/lib/tests/componentRender";
import { Profile } from "entities/Profile";
import { Country } from "entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";

const profile: Profile = {
  id: "2",
  firstname: "Ivan",
  lastname: "Petrov 2",
  age: 22,
  country: Country.Belarus,
  city: "Moscow",
  avatar:
    "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "2" },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", () => {
  test("readonly mode should be changed", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });
  test("undo changes during the canceling", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(
      screen.getByTestId("ProfileCard.firstname"),
      "newName"
    );
    await userEvent.type(
      screen.getByTestId("ProfileCard.lastname"),
      "newLastname"
    );

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("newName");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "Ivan");
    await userEvent.type(
      screen.getByTestId("ProfileCard.lastname"),
      "Petrov 2"
    );
  });
  test("error should appear", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });
  test("PUT req should be sent, if there are no validation errors", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.type(
      screen.getByTestId("ProfileCard.firstname"),
      "newName"
    );

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
