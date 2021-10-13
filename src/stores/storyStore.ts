import faker from "faker";
import { makeAutoObservable } from "mobx";
import { Story } from "types/story";

class StoryStore {
  stories: Story[] = [];

  constructor() {
    makeAutoObservable(this);

    this.genStories(20);
  }

  private genStories = (count: number) => {
    this.stories = [...Array(count)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
  };
}

export default StoryStore;
