import faker from "faker";
import StoriesItem, { StoriesItemProps } from "modules/stories/StoriesItem";
import { render } from "./test-utils";

describe("StoriesItem", () => {
  let expectedProps: StoriesItemProps;

  beforeEach(() => {
    expectedProps = {
      story: {
        ...faker.helpers.contextualCard(),
        id: 1,
      },
    };
  });

  test("should render the story", () => {
    const { getByText, getByAltText } = render(
      <StoriesItem {...expectedProps} />
    );

    const { username } = expectedProps.story;

    const text = getByText(username);
    const image = getByAltText(username);

    expect(text).toBeVisible();
    expect(image).toBeVisible();
  });
});
