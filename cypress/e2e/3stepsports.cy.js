import 'cypress-xpath';

// This project will consist of
// ten test cases for testing the main website of 3 Step Sports.

// First Test Case
describe('Verify "Basketball" button when hovering over the "Sports" tab in the nav bar.', () => {
  it('should navigate to the Basketball page from the Sports dropdown', () => {
    // Step 1: Visit the main website
    cy.visit('https://threestep.com');

    // Step 2: Hover over the "Sports" navigation item
    // I used  cy.get(#menu-main-menu) because it was hard getting access to the basketball tab from Sports
    // since it's in a dropdown menu.
    cy.get('#menu-main-menu > #menu-item-13002 > .uabb-has-submenu-container > a')
      .trigger('mouseover');

    cy.wait(500); // give dropdown a moment to appear

    // Step 3: Click "Basketball" from the dropdown
    cy.get('#menu-item-11278 > a').first().click(); // picks the first element

    // Step 4: Verify URL contains "/basketball"
    cy.url().should('include', '/basketball');

    // Step 5: Verify page header/title mentions "Basketball"
    cy.get('h1, h2, h3').contains(/basketball/i).should('be.visible');

    });
  });

// Second Test Case
describe('Verify Instagram Button brings user to a new tab', () => {
it('should display a working Instagram Follow button that opens in a new tab', () => {
  // Step 1: Visit the main website
  cy.visit('https://threestep.com');

  // Step 2: Scroll near the bottom where the Follow button is located
  cy.scrollTo('bottom', { offset: { top: -600, left: 0 } });

  // Step 3: Find the Instagram link
  cy.get('a[href*="instagram.com"]')
    .should('be.visible') // Button is visible on the page
    .and('have.attr', 'href') // It has an href attribute
    .and('include', 'instagram.com'); // The href includes Instagram

  // Step 4: Verify the link opens in a new tab
  cy.get('a[href*="instagram.com"]').should('have.attr', 'target', '_blank');
});
});

// Third Test Case
describe('Verify News Button in Footer', () => {
it('should open the News page from the footer and verify "Latest News" is visible', () => {
  // Step 1: Visit the main website
  cy.visit('https://threestep.com');

  // Step 2: Scroll to the footer
  cy.scrollTo('bottom');

  // Step 3: Find the "News" link in the footer
  cy.contains('footer a', 'News')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', '/news')

  // Step 4: Open the News page in the same tab (Cypress can't switch tabs)
  cy.get(':nth-child(2) > [href="https://threestep.com/news/"]').click();

  // Step 5: Verify the "Latest News" section appears
  cy.contains(/latest news/i).should('be.visible');
});
});

// Fourth Test Case
// Test Case: Verify the "PlayerFirstTech" button navigates correctly and displays expected content
describe('Verify "PF Web&Pay" Text displays', () => {
  it('should navigate to PlayerFirstTech site and verify "PF Web & Pay" text is visible', () => {
    // Step 1: Visit the main website
    cy.visit('https://threestep.com');

    // Step 2: Locate the PlayerFirstTech button in the navbar
    cy.get('#menu-main-menu > #menu-item-13139 > a > .menu-item-text').click();

    // Step 4: Scroll down the new page
    cy.scrollTo('bottom', { offset: { top: -600, left: 0 } });

    // Step 5: Verify the text "PF Web & Pay" is visible
    cy.contains(/PF Web & Pay/i).should('be.visible');
  });
});


// Fifth Test Case
describe('Verify "Filing a Claim" buttons work and brings user to vicoverage.com', () => {
  it('navigates to the Vertical Insure FAQs page, files a claim, and validates new tab', () => {
    // Step 1: Visit the main page
    cy.visit('https://threestep.com');

    // Step 2: Scroll below the footer where the "Vertical Insure FAQs" link is located
    cy.scrollTo('bottom');

    // Step 3: Click the "Vertical Insure FAQs" link
    cy.get('a[href="https://threestep.com/sportsinsurance/"]')
      .should('be.visible')
      .invoke('removeAttr', 'target') // ensure it opens in same tab for Cypress
      .click();

    // Step 5: Click the "File a Claim" box to scroll down
    cy.contains('File a Claim').scrollIntoView().click();

    // Step 6: Get "File Claim" link and handle new origin
    cy.contains('File Claim')
      .should('have.attr', 'href')
      .then((link) => {
        // Step 7: Visit and validate on vicoverage.com
        cy.origin('https://vicoverage.com', { args: { link } }, ({ link }) => {
        cy.visit(link);
        cy.contains(/you['’]re covered/i, { timeout: 10000 }).should('be.visible');
      });

      });
  });
});


// Sixth Test Case Leadership Section - CEO Profile Popup
describe('Verify Chad Gruen button brings user to a popup about him', () => {
  beforeEach(() => {
    // Step 1: Visit the main 3Step Sports website
    cy.visit('https://threestep.com');
  });

  it('should display Chad Gruen popup with correct bio text', () => {
    // Step 2: Scroll down to the "Our Why" section
    cy.contains('Our Why', { matchCase: false }).scrollIntoView();

    // Step 3: Click the "See Now" box
    cy.get('.fl-button-text').click();

    // Step 4: Scroll down to the Leadership section
    cy.contains('Leadership', { matchCase: false }).scrollIntoView();

    // Step 5: Click the "Chad Gruen" CEO box
    cy.contains('Chad Gruen', { matchCase: false }).click();

    // Step 6: Verify the popup appears with expected text
    cy.get('body').within(() => {
      cy.contains('CHAD GRUEN', { matchCase: false }).should('be.visible');
      cy.contains('PlayerFirst', { matchCase: false }).should('be.visible');
    });

  });
});


// Seventh Test Case
describe('Verify Carousel button works when clicked three times in a row', () => {
  it('Scrolls to the Our Partners section and clicks the right arrow three times', () => {
    // Step 1: Visit the homepage
    cy.visit('https://threestep.com');

    // Step 2: Set a larger viewport so the carousel and buttons are visible
    cy.viewport(1920, 1080);

    // Step 3: Scroll down to the "Our Partners" section
    cy.contains('Our Partners', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible');

    // Step 4: Ensure the carousel right button is visible
    const carouselNextBtn = '.fl-module-uabb-image-carousel > .fl-module-content > .uabb-module-content > .slick-next > .fas';
    cy.get(carouselNextBtn, { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible');

    // Step 5: Click the right arrow three times using a loop
    for (let i = 0; i < 3; i++) {
      cy.get(carouselNextBtn).click({ force: true });
      cy.wait(1000); // wait for the slide transition
    }

      });

  });


// Eighth Test Case
describe('Verify Premier Basketball Report Link opens new tab after clicking "Data and Rankings" in main page', () => {
  it('should navigate to Premier Basketball Report from Data & Rankings', () => {
    // Step 1: Visit the main page
    cy.visit('https://threestep.com');

    // Step 2: Click on the "Data & Rankings" link in the nav bar
    cy.get('#menu-main-menu > #menu-item-13000 > a > .menu-item-text').click();

    // Step 3: Use cy.origin to handle the cross-origin site
    // You have to use an a href to prevent a new tab from opening
    cy.get('a[href="https://premierbasketballreport.com/"]').then((link) => {
      const url = link.prop('href');

    cy.origin('https://premierbasketballreport.com', { args: { url } }, ({ url }) => {
      cy.visit(url);

    // Step 4: Verify content on the new site
    cy.contains('Premier Basketball Report').should('be.visible');
      });
    });

  });
});


// Ninth Test Case
describe('Verify Bottom Right Shortcut Button Scrolls to Top', () => {
  it('should scroll to top when bottom right shortcut button is clicked', () => {
    // Step 1: Visit the main page
    cy.visit('https://threestep.com');

    // Step 2: Scroll to the bottom of the page
    cy.scrollTo('bottom');

    // Step 3: Click the bottom right shortcut button
    cy.get('#fl-to-top') // replace with the correct selector
      .should('be.visible')
      .click();

    // Step 4: Verify the page scrolls back to the top
    cy.window().its('scrollY').should('eq', 0);
  });
});

// Tenth Test Case
describe('Verify the video in the "Clubs and Events" tab after clicking it plays after being clicked.', () => {
  it('should navigate to Event Productions and play the video', () => {
    // Step 1: Visit the main page
    cy.visit('https://threestep.com');

    // Step 2: Scroll down the page by a fixed amount to bring carousel into view
    cy.scrollTo(0, 1500); // adjust 1500px as needed
    cy.wait(500); // let content load

    // Step 3: Click the right carousel arrow once
    cy.get('#wwd-slider > .fl-module-content > .uabb-module-content > .slick-next > .fas') // replace with correct selector
      .click();
    cy.wait(1000); // wait for slide transition

    // Step 4: Click the "Clubs and Events" link in the carousel
    cy.get('[data-slick-index="3"] > .uabb-blog-posts-shadow > .uabb-blog-post-inner-wrap > .uabb-blog-post-content > a > .wwd_slider > :nth-child(4)')
      .invoke('removeAttr', 'target') // ensures link opens in same tab
      .click();

    // Step 5: Scroll down a bit on the new page
    cy.scrollTo(0, 600);

    // Step 6: Play the video
    cy.get('video') // replace with the correct video selector
      .should('exist')
      .then(($video) => {
        $video[0].play();
      });
  });
});
