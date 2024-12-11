import homePageLocators from '../locators/homePageLocators'

 const HomePage ={

    openHomePage(){
        cy.visit('/')
        cy.get('body');
        cy.viewport(window.screen.width, window.screen.height);
        cy.title().should('eq', 'Sell your car in under an hour | Buy my car | webuyanycar')
        cy.get(homePageLocators.BUTTON_ACCEPT_COOKIES).click()
        cy.scrollTo(0, 500)
    }
}
export default HomePage
