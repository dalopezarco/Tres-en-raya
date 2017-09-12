import { TresenrayaPage } from './app.po';

describe('tresenraya App', () => {
  let page: TresenrayaPage;

  beforeEach(() => {
    page = new TresenrayaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
