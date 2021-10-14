import faker from "faker";
import StoriesItem, { StoriesItemProps } from "modules/stories/StoriesItem";
import { Story } from "types/story";
import { render } from "./test-utils";

describe("StoriesItem", () => {
  let expectedProps: StoriesItemProps;

  beforeEach(() => {
    const story: Story = { ...faker.helpers.contextualCard(), id: 1 };

    expectedProps = {
      avatar: story.avatar,
      username: story.username,
    };
  });

  test("should render the story", () => {
    const { getByText, getByAltText } = render(
      <StoriesItem {...expectedProps} />
    );

    const { username } = expectedProps;

    const text = getByText(username);
    const image = getByAltText(username);

    expect(text).toBeVisible();
    expect(image).toBeVisible();
  });
});
