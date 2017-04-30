import { AngularFlexLayoutPage } from './app.po';

describe('angular-flex-layout App', () => {
  let page: AngularFlexLayoutPage;

  beforeEach(() => {
    page = new AngularFlexLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
