import { W10gPage } from './app.po';

describe('w10g App', function() {
  let page: W10gPage;

  beforeEach(() => {
    page = new W10gPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
