import { HomeIcon } from "@heroicons/react/outline";
import HeaderOptionsItem, {
  HeaderOptionsItemProps,
} from "components/header/HeaderOptionsItem";
import { render } from "./test-utils";

describe("HeaderOptionsItem", () => {
  let expectedProps: HeaderOptionsItemProps;

  beforeEach(() => {
    expectedProps = {
      Icon: HomeIcon,
    };
  });

  test("should render count when given positive count", () => {
    expectedProps.count = 3;

    const { getByRole } = render(<HeaderOptionsItem {...expectedProps} />);
    const count = getByRole("count");

    expect(count).toBeVisible();
  });

  test("should not render count when not given", () => {
    const { queryByRole } = render(<HeaderOptionsItem {...expectedProps} />);

    const count = queryByRole("count");

    expect(count).toBeNull();
  });
});
