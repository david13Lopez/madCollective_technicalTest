import data from '../fixtures/data.json' //added as variable to allow to change what you want to search without changing the test

describe('Wikipedia searcher test', () => {

    it('Should find what is setted in data fixtures', () => {

        cy.visit("https://www.wikipedia.org")
        cy.get('[id="search-input"]').type(data.searchParam) //get the input field by idanc type on it
        cy.get('[data-jsl10n="search-input-button"]').click() //get the search button and click on it
        cy.fixture('data').then((searchParam) => {
            expect(data, 'the same data').to.deep.equal(searchParam) //asserting the data using the fixtures defined in data.json
        })
    })
})