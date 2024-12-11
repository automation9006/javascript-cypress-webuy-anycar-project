import homePage from "../pages/HomePageObject"
import homePageLocators from "../locators/homePageLocators"
import {slowCypressDown} from 'cypress-slow-down'
const jsonDataValidCarReg = require('../../fixtures/carRegData.json')
const jsonDataInValidCarReg = require('../../fixtures/carInvalidRegData.json')

slowCypressDown()

beforeEach(() => {
   
  homePage.openHomePage()
})
describe('home page elements validation', ()=> {
  
  it('validate home page elements', ()=> {

    cy.get(homePageLocators.INPUT_SEARCH_MILEAGE).should('be.visible')
    cy.xpath(homePageLocators.INPUT_SEARCH_CAR_REG2).should('be.visible')
    cy.get(homePageLocators.BUTTON_GO).should('be.visible')
    cy.get(homePageLocators.TOP_NAV).then((element)=>{
      expect(element).to.have.length(4);
  })
 
 })

 jsonDataValidCarReg.forEach((carRegtestData) =>{
    it(`validate search valid car reg details ${carRegtestData.carReg}`, ()=> {

      cy.get(homePageLocators.INPUT_SEARCH_MILEAGE).type(carRegtestData.miles)
      cy.xpath(homePageLocators.INPUT_SEARCH_CAR_REG2).type(carRegtestData.carReg)
      cy.get(homePageLocators.BUTTON_GO).click({ multiple: true, force: true })
      cy.xpath(homePageLocators.TEXT_MANUFACT_NAME).should('be.visible')
      cy.xpath(homePageLocators.TEXT_MODEL_NAME).should('be.visible')
      cy.xpath(homePageLocators.TEXT_YEAR).should('be.visible')
      cy.xpath(homePageLocators.TEXT_MANUFACT_NAME).should('have.text', carRegtestData.carModel)
      cy.xpath(homePageLocators.TEXT_MODEL_NAME).should('contain', carRegtestData.model)
      cy.get(homePageLocators.TEXT_YEAR).then((element)=>{
        expect(element.text()).to.equal( carRegtestData.year);
    })
   })

  })

  jsonDataInValidCarReg.forEach((carInvalidRegData) =>{
    it(`validate search Invalid car reg details ${carInvalidRegData.carReg}`, ()=> {

      cy.get(homePageLocators.INPUT_SEARCH_MILEAGE).type(carInvalidRegData.miles)
      cy.xpath(homePageLocators.INPUT_SEARCH_CAR_REG2).type(carInvalidRegData.carReg)
      cy.get(homePageLocators.BUTTON_GO).click({ multiple: true, force: true })
      cy.xpath(homePageLocators.TEXT_NO_REGFOUND).should('be.visible')
      cy.xpath(homePageLocators.TEXT_NO_REGFOUND).should('have.text', carInvalidRegData.noRegistrationFound)
    })
   })

  })