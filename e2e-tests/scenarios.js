'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /me when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/me");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/me');
    });


    it('should render me when user navigates to /me', function() {
      expect(element.all(by.css('[ng-view] #name')).first().getText()).
        toMatch(/Muhammed Tanrıkulu/);
    });

  });


  describe('details', function() {

    beforeEach(function() {
      browser.get('index.html#/details');
    });


    it('should render details when user navigates to /details', function() {
      expect(element.all(by.css('[ng-view] #name_d')).first().getText()).
        toMatch(/Muhammed Tanrıkulu/);
    });

  });
});
