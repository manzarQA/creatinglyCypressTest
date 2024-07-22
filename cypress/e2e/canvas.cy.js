/// <reference types="cypress" />
const canvasPage = require("../pages/canvasPage");

describe("Creatingly platform Designstudio", () => {

  beforeEach(() => {
    cy.viewport("macbook-16");
    canvasPage.visit();
    canvasPage.verifyCanvasLoading();
  });

  it("Automation Testing", () => {

    // 2. Drop an Artboard
    canvasPage.verifyLeftMenuToBeVisible();
    canvasPage.clickOnArtboardOption();
    canvasPage.verifyArtboardModal();
    canvasPage.selectDesktopSimpleTemplate();
    canvasPage.VerifyTheArtBoardCanvasToBeVisible();


    //  3.  Drop a Chart element inside a stack container.
    canvasPage.addBarchartToArtboard();
    canvasPage.verifyBarchartOnArtboard();


    //  4. Centre justify the content and the container.
    canvasPage.clickOnBarchart();
    canvasPage.selectTheAlignPosition("C | C");
    canvasPage.clickFitIntoScreenOption();
    

    //  5. Resize the Chart element to fit it to the container size.
    canvasPage.clickOnBarchart();
    canvasPage.setTheSize("Width", "%", "100");
    canvasPage.setTheSize("Height", "%", "100");
    canvasPage.clickFitIntoScreenOption();
  });
});
