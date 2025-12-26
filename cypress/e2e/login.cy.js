import {  faker } from '@faker-js/faker';

describe("Login User", () => {

  it("invalid email password in login", () => {
    cy.visit("/login")

    //interpte url login
    cy.intercept('POST', '**/auth_login').as('Login');

    cy.get("input[name=email]")
      .type("user12@gmail.com")

    cy.get("input[name=password]")
      .type("password")

    cy.get("button[type=submit]").click()
    cy.contains("Invalid email or password").should("be.visible")
  })

  it("login successfully", () => {
    cy.visit("/login")

    cy.get("input[name=email]")
      .type("user1@gmail.com")

    cy.get("input[name=password]")
      .type("password")

    cy.get("button[type=submit]").click()

  })
})

