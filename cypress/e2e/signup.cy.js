
import {  faker } from '@faker-js/faker';

describe("Signup Flow", () => {

    it("show all erros", ( ) => {
        cy.visit("/")
        cy.get("button[type=submit]").click()
        cy.contains("can't be blank").should("be.visible")
    })

    it("shows error for invalid email", () => {
    cy.visit("/")

    cy.get('input[name="username"]').type("user1")
    cy.get('[data-testid="phone-input"]')
    .should('be.visible')
    .type("7649040881")
    cy.get('input[name="email"]').type("invalid-email")
    cy.get('input[name="password"]').type("password1")
    cy.get('input[name="password_confirmation"]').type("password1")

    cy.get("button[type=submit]").click({ force: true })

    cy.contains("is not a valid email").should("be.visible")

    })

    // error password and password confirmation not match
    it ("show error when password and password confirmation are mismatch",() =>{

        const ramdomEmail = faker.internet.email();
        cy.visit("/")

        cy.get('input[name="username"]').type("user1")
        cy.get('[data-testid="phone-input"]').type("7649040881")
        cy.get("input[name=email]").type(ramdomEmail)
        cy.get('input[name="password"]').type("password1")
        cy.get('input[name="password_confirmation"]').type("password")
        cy.get("button[type=submit]").click()

        cy.contains("doesn't match Password").should("be.visible")
    }) 

    // errro phone number are valid india is not valid phone_number

    it ("is not valid phone_number",() =>{

        const ramdomEmail = faker.internet.email();
        cy.visit("/")

        //interpte url singup 
        cy.intercept('POST', '**/signup').as('signupRequest');

        cy.get('input[name="username"]').type("user1")
        cy.get('[data-testid="phone-input"]').type("764904088")
        cy.get("input[name=email]").type(ramdomEmail)
        cy.get('input[name="password"]').type("password1")
        cy.get('input[name="password_confirmation"]').type("password1")
        cy.get("button[type=submit]").click()
        cy.contains("is not valid phone_number").should("be.visible")

        // check response in console api response
        cy.wait('@signupRequest').then((vishwas) => { 
            // debugger  

            console.log("Errors reposne",vishwas.response)
             expect(vishwas.response.statusCode).to.eq(422); // Unprocessable Entity
             expect(vishwas.response.body.errors.phone_number[0]).to.eq('is not valid phone_number');
        });

       
    })

    it ("in phone number only digit not any character",() =>{

        const ramdomEmail = faker.internet.email();
        cy.visit("/")

        //interpte url singup 
        cy.intercept('POST', '**/signup').as('signupRequest');

        cy.get('input[name="username"]').type("user1")
        cy.get('[data-testid="phone-input"]').type("+917649040hhki")
        cy.get("input[name=email]").type(ramdomEmail)
        cy.get('input[name="password"]').type("password1")
        cy.get('input[name="password_confirmation"]').type("password1")
        cy.get("button[type=submit]").click()
        cy.contains("is not valid phone_number").should("be.visible")

        cy.wait('@signupRequest').then((api_response) => { 
         // Is line par test ruk jayega.
        // Dhyan rahe: Jab test yahan ruke, tabhi console mein type karein.
            // debugger; 

            // Automation checks
            expect(api_response.response.statusCode).to.eq(422);
            expect(api_response.response.statusMessage).to.eq('Unprocessable Content');
            
        }); 
    })

    //Sucessfully login 
     it ("Signup sucessfully",() =>{

        const ramdomEmail = faker.internet.email();
        cy.visit("/")

        //interpte url singup 
        cy.intercept('POST', '**/signup').as('signupRequest');

        cy.get('input[name="username"]').type("user1")
        cy.get('[data-testid="phone-input"]').type("+917418529638")
        cy.get("input[name=email]").type("user1@gmail.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="password_confirmation"]').type("password")
        cy.get("button[type=submit]").click()
        // cy.contains("is not valid phone_number").should("be.visible")

        cy.wait('@signupRequest').then((api_response) => { 
         // Is line par test ruk jayega.
        // Dhyan rahe: Jab test yahan ruke, tabhi console mein type karein.
            debugger; 

            // Automation checks
            // expect(api_response.response.statusCode).to.eq(422);
            // expect(api_response.response.statusMessage).to.eq('Unprocessable Content');
            
        }); 
    })
})


describe('User Registration - Email Uniqueness', () => {
    // Ek random email generate kar lete hain jo pure test block mein kaam aaye
    const duplicateEmail = faker.internet.email();

    it("should show error when email is already taken", () => {
        // STEP 1: Pehla user register karein (taaki email database mein chala jaye)
        // Note: Aap yahan cy.request se direct API bhi hit kar sakte hain fast karne ke liye
        cy.visit("/");
        cy.get('input[name="username"]').type("User One");
        cy.get('[data-testid="phone-input"]').type("7649040881");
        cy.get("input[name=email]").type(duplicateEmail);
        cy.get("input[name=password]").type("123123");
        cy.get("input[name=password_confirmation]").type("123123");
        cy.get("button[type=submit]").click();

        // STEP 2: Logout karein ya wapas signup page par aayein
        cy.visit("/"); 

        // STEP 3: Wahi email dobara use karein
        cy.get('input[name="username"]').type("User Two");
        cy.get('[data-testid="phone-input"]').type("9988776655");
        cy.get("input[name=email]").type(duplicateEmail); // Wahi purana email
        cy.get("input[name=password]").type("123123");
        cy.get("input[name=password_confirmation]").type("123123");
        
        // Form submit karne se pehle API ko intercept karein taaki hum error check kar sakein
        cy.intercept('POST', '**/signup').as('signupRequest');
        
        cy.get("button[type=submit]").click();

        // STEP 4: Validation (Error message check karein)
        // 1. UI par error check karna
        cy.contains("has already been taken").should("be.visible");

        cy.wait('@signupRequest').then((error) => {
            
            expect(error.response.statusCode).to.eq(422); // Unprocessable Entity
            expect(error.response.body.errors.email[0]).to.eq("has already been taken");
        });
    });
});
