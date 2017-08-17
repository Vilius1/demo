import { MySitePage } from './app.po';

describe('my-site App', () => {
  let page: MySitePage;

  beforeEach(() => {
    page = new MySitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
