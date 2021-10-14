import faker from "faker";
import { makeAutoObservable } from "mobx";
import { Suggestion } from "types/feed";

class FeedStore {
  suggestions: Suggestion[] = [];

  constructor() {
    makeAutoObservable(this);
    this.genSuggestions(5);
  }

  private genSuggestions = (count: number) => {
    this.suggestions = [...Array(count)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
  };
}

export default FeedStore;
