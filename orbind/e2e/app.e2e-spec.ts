import { OrbindPage } from './app.po';

describe('orbind App', () => {
  let page: OrbindPage;

  beforeEach(() => {
    page = new OrbindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
