import { VersuchPage } from './app.po';

describe('versuch App', () => {
  let page: VersuchPage;

  beforeEach(() => {
    page = new VersuchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
