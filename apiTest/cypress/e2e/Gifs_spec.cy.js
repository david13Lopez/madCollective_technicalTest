import data from '../fixtures/data.json' //added as variable to allow to change what you want to search without changing the test

describe('Gifs URL searchs', () => {


    it('Should search simple query ‘q’ parameter', () => {

        cy.request('GET', `http://api.giphy.com/v1/gifs/search?q=${data.simpleSearchParam}&api_key=${data.apiKey}`).as('simpleQueryRequest');
        cy.get('@simpleQueryRequest').then(response => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.lengthOf(50);
            expect(response.body.pagination.total_count).to.eq(45045);
            expect(response.body.data).to.have.lengthOf(response.body.pagination.count);

        });
    })

    it('Should search composed query ‘q’ parameter', () => {

        cy.request('GET', `http://api.giphy.com/v1/gifs/search?q=${data.multipleSearchParam}&api_key=${data.apiKey}`).as('multipleQueryRequest');
        cy.get('@multipleQueryRequest').then(response => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.lengthOf(50);
            expect(response.body.pagination.total_count).to.eq(58);
            expect(response.body.data).to.have.lengthOf(response.body.pagination.count);

        });
    })

    it('Should search simple query ‘q’ parameter and ‘limit’ parameter exceeding max.', () => {

        cy.request('GET', `http://api.giphy.com/v1/gifs/search?q=${data.simpleSearchParam}&limit=${data.exceedLimitNumber}&api_key=${data.apiKey}`).as('zeroLimitQueryRequest');
        cy.get('@zeroLimitQueryRequest').then(response => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.lengthOf(50);
            expect(response.body.pagination.total_count).to.eq(45045);
            expect(response.body.data).to.have.lengthOf(response.body.pagination.count);

        });

    })

    it('Should search composed query ‘q’ parameter and ‘limit’ parameter exceeding max.', () => {

        cy.request('GET', `http://api.giphy.com/v1/gifs/search?q=${data.multipleSearchParam}&limit=${data.exceedLimitNumber}&api_key=${data.apiKey}`).as('zeroLimitQueryRequest');
        cy.get('@zeroLimitQueryRequest').then(response => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.lengthOf(50);
            expect(response.body.pagination.total_count).to.eq(58);
            expect(response.body.data).to.have.lengthOf(response.body.pagination.count);

        });

    })
    it('Should search simple query ‘q’ parameter and ‘limit’ parameter set to 0 max', () => {

        cy.request('GET', `http://api.giphy.com/v1/gifs/search?q=${data.simpleSearchParam}&limit=${data.zeroLimitNumber}&api_key=${data.apiKey}`).as('zeroLimitQueryRequest');
        cy.get('@zeroLimitQueryRequest').then(response => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.lengthOf(0);
            expect(response.body.pagination.total_count).to.eq(0);
            expect(response.body.data).to.have.lengthOf(response.body.pagination.count);

        });
    })
})