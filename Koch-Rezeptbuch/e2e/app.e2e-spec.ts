import { KochRezeptbuchPage } from './app.po';

describe('koch-rezeptbuch App', () => {
  let page: KochRezeptbuchPage;

  beforeEach(() => {
    page = new KochRezeptbuchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
