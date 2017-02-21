import { TaasPage } from './app.po';

describe('taas App', () => {
  let page: TaasPage;

  beforeEach(() => {
    page = new TaasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
