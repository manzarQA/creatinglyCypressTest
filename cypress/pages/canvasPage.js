/// <reference types="cypress" />
class canvasPage {
  elements = {
    canvasLoadingPopup: "[id='NotiflixLoadingMessage']",
    canvasLeftMenu: "#drawing-panel-tooltip",
    leftMenuArtboardOption: "#draw-drawing-panel",
    artboardModalHeader: "[id='sys-form-modal-device_selector']",
    artboardModalDesktopOption: "[aria-label='List of Desktop templates']",
    desktopSimpleTemplate: '[name="Desktop Template1"]',
    artboardCanvas: '[type="layout"]',
    leftmenuChartOption: "[data-testid='Chart']",
    barchartOption: "[data-testid='Bar Chart']",
    firstChartOnArtBoard: "[id='Chart1']",
    alignContainerHeading: "[class='grid-align-container']",
    alignConatinerOption: "[class='btn']",
    fitIntoScreenButton: "[alt='ZoomTOFitAllSVG']",
    setTheSizeHeading: ".title-setting",
    setSizeInput: "[class='ng-star-inserted']",
  };

  visit() {
    cy.visit("https://dev.platform.creatingly.com/webstudio");
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  }

  verifyCanvasLoading() {
    cy.wait(10000);
    cy.get(this.elements.canvasLoadingPopup).should("not.exist");
  }

  verifyLeftMenuToBeVisible() {
    cy.get(this.elements.canvasLeftMenu).should("be.visible");
  }

  clickOnArtboardOption() {
    cy.get(this.elements.canvasLeftMenu).realHover();
    cy.get(this.elements.leftMenuArtboardOption).realClick();
    cy.wait(1000);
  }

  verifyArtboardModal() {
    cy.get(this.elements.artboardModalHeader)
      .should("contain.text", "Devices");

    cy.get(this.elements.artboardModalDesktopOption)
      .should("be.visible")
      .parent()
      .should("have.css", "background")
      .and("contain", "rgb(240, 248, 255)");
  }

  selectDesktopSimpleTemplate() {
    cy.get(this.elements.desktopSimpleTemplate).should("be.visible").click();
  }

  VerifyTheArtBoardCanvasToBeVisible() {
    cy.get(this.elements.artboardCanvas).should("be.visible");
  }

  addBarchartToArtboard() {
    cy.get(this.elements.leftmenuChartOption)
      .scrollIntoView()
      .realHover()
      .then(() => {
        cy.wait(5000);
        cy.get(this.elements.barchartOption)
          .last()
          .should("be.visible")
          .realClick();
      });
  }

  verifyBarchartOnArtboard() {
    cy.get(this.elements.firstChartOnArtBoard).should("be.visible");
  }

  clickOnBarchart() {
    cy.get(this.elements.firstChartOnArtBoard).click();
  }

  selectTheAlignPosition(option) {
    cy.get(this.elements.alignContainerHeading)
      .should("exist")
      .scrollIntoView();
    cy.get(this.elements.alignConatinerOption).contains(option).click();
    cy.wait(2000);
  }

  clickFitIntoScreenOption() {
    cy.wait(500);
    cy.get(this.elements.fitIntoScreenButton).click();
  }

  setTheSize(selectOption, selectFormate, value) {
    cy.contains(this.elements.setTheSizeHeading, "Size Settings")
      .should("exist")
      .scrollIntoView();
    cy.wait(1000);
    cy.get(this.elements.setSizeInput)
      .contains(selectOption)
      .next()
      .find("select")
      .select(selectFormate);
    cy.get(this.elements.setSizeInput)
      .contains(selectOption)
      .next()
      .find("input")
      .type(value + "{enter}");
    cy.wait(1000);
  }
}

module.exports = new canvasPage();
