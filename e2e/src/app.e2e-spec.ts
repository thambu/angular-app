import { AppPage } from './app.po';

describe('Movie App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.getTitle();
    expect(page.getTitle()).toEqual('Movies');
  });
});
