# TraderDash

## Table of Contents: 
- [Project Overview](#Project-Overview)
- [UX Design](#UX-Design)
- [Development Stage](#Development-Stage) Project Management, Bugs & Fixes, Credits, Testing
- [Deployment](#Deployment)
- [Technologies](#Technologies)

### Project screen shots to be inserted here

[Live link](#) | [User guide](#) Project in development, live links will be activated once deployed

# Project Overview

TraderDash is a free analysis charting solution using real-time and end of day data for equity traders and investors.  
As a standalone product TraderDash can be used in conjunction with an execution platform.
TraderDash provides an informational edge that can enhance a traders existing strategy.

## TraderDash assists in four real world trading and investing processes:

1. Pre-market multi-timeframe analysis of the major indexes to frame the market and create a bigger picture road map
2. Digging deeper and identifying strong sectors in a strong market and weak sectors in a weak market
3. Researching the technicals and fundamentals of specific stocks to potentially trade in line with the the above top down analysis
4. Monitoring live market data: quickly being able to identify intraday sentiment, overall market direction, breaking news and economic events


## User Profiles:

The majority of the below market participants will typically manage individual accounts and be classed as non-professionals with their brokers. 
They will be largely discretional traders trading outright positions.
The strategy styles will include a mix of trend and mean reversion plays across a range of time horizons from intra-day to quarterly and longer.     

- **Investors managing a portfolio** focused on sector ETF's and/or stocks executing via stocks, futures, options or CFD's.
  This participant will use technicals as more of a timing tool but also heavily lean on company fundamentals and have a view on the economic landscape with
  a typical time horizon ranging from months to years.  

- **Swing traders managing a portfolio style trading account** on sector ETF's and/or stocks. This participant will have a typical time horizon from days up to a month
  and will lean on technicals as their primary decision making tool but also confirm their trade ideas with fundamental and economic research.

- **Intra-Day traders** managing a trading account largely holding one positon at a time and ending each trading session flat.  
  This participant rarely holds positions overnight and is active during the US open.  
  This trader can operate within a range of time frames within the day timeframe from scalping 5-10 ticks/cent to targeting intra-day swings of multiple points. 
  These intra-day swings can be either break out trending plays or ranging mean reversion plays.  This trader may execute via futures, CFD's or stocks.

## Stakeholders and their business goals: 

- TraderDash owner:
    - To get TraderDash out and being used by equity traders around the world
    - To build a contact list of potential future customers and provide prospects easy access to contact the owner to discuss their own goals
    - To promote professional trading processes and present market analysis tools in a more functional way
    - To attract the interest of potential employers within the industry

- Prospective clients:
    - To custom TraderDash to fit their analysis style and methods
    - To work with the developer to automate their trading strategy, create trade alerts, maybe connect to their broker account and execute, maybe even build a desktop app
    - To create a proprietary analysis tool pulling in custom data and presenting it via a custom built a UI  

- Potential employers:
    - Brokers, trading and investment firms, trading platforms, charting package providers and financial news outlets would value having a developer on their team that also has a high level of experience in there industry and is able to
      understand the practical nature and application of the development targets 


# UX Design

## User Stories

### First Time Visitor Goals:
- To understand what the website does and if they are interested within 10 seconds:
    - To quickly and clearly absorb the hero section of the landing page and to understand that TraderDash is essentially a free charting analysis tool
    - To then read the short introduction text (5 seconds) and understand the main purpose of the tool is to provide an informational edge to their trading
    - To click on the short introduction video and get an overview of each dashboard

- To get access to the trading dashboards and see what all fuss is about quickly and with minimal clicks:
    - Dashboards tab located within the nav bar provides a dropdown menu taking them to the dashboard that most interests them initially
    - The nav bar is present at the top of every page so visitors quickly learn how to go directly from one dashboard to another and also to any other page directly

- To decide if TradeDash presents data in a way that provides value to their trading/investing operation and if they should bookmark a given dashboard:
    - To test the functionality of the charts and undertake technical analysis Tasks
    - To re-size the dashboards to fit their screen set-up and test how they can use multiple dashboards at a time
    - To assess if the way the markets have been grouped and condensed provides a better use of screen real-estate than what they are already doing
    - To identify if the data points are presented in a way that better promotes data chunking and the ability to absorb, interpret and act with confidence, making informed and timely decisions 

- Does TraderDash allow the trader to develop the building blocks of their trading edge, do they feel using the tool increases their edge in the market:
    - Do the multi timeframe dashboards provide greater context to the way traders frame the market and identify significant levels to trade from and better prepare for the open
    - Does the Intrady-Dash give the trader greater awareness of overall market sentiment and keep the trader up to date with price sensitive news and economic events

### Returning Visitor Goals:
- To subscribe and be the first to try new trading products as they are rolled out
- To get in touch with the developer and discuss their own goals
- To give TraderDash an ongoing test to see if they are able to develop a greater trading edge:
    - To quickly access dashboards and begin their analysis process
    - To get familar with the Intraday-Dash and how to quickly interpret the information and how to also utilise the economic and news feeds in their pre-market prep


### Frequent User Goals:
- For TraderDash to become a core part of a traders daily operational processes
    - To quickly set up their screens to utilise mutiple dashboards during the analysis and planning preparation
    - To become consistent with their pre-market prep and giving context to the price action against the backdrop of the bigger picture 
    - To become intricately familar with intermarket relatonships and when one market is stronger or weaker than normal, 
      when one market is leading the pack and when markets are either directional or fighting aginst one another
    - To be aware of the current overall market sentiment and whether it is a risk on session or risk off session and tracking what asset class funds are being put to work in
    - To develop the skill of chunking a choice set of the above data points to create a holistic, 
      real-time awareness that empowers a trader to take decisive action and seize the moment
    - To add the informational edge from TraderDash to the traders existing price action strategy to increase win rate,
      increase the size of winners thus improving their risk/reward ratio, ultimately improving the traders overall expectancy 


## Features and Functions to be included in the Project
- Subscribe modal pop up linked to mailchimp
- Email form providing user details, message linked to mailchimp
- Possibly add calendly schedule a call form on the contact page
- CSS parallax hero image 
- Subscribe button transition in when page loads
- Charting widgets embedded from 3rd party sources
- Live news feed widget from 3rd party news aggregator
- Live economic calendar widget from 3rd party
- Embedded videos presenting the functionality of the dashboards  

## Information Architecture
- Nav Bar: User Guide link to pdf
- Home:
    - Hero Image with headline attention grabber
    - Leading down to the introduction section with text and embedded video
    - Leading on to section with 4 embedded videos each one a short presentation of each dashboard
    - Below that a testimonial carousel with a couple of rotating testimonials
    - just before the footer a short text with a contact button taking the user to the contact page 
- Intraday-Dash:
    - Tickers showing the net change since previous close (Dollar index, Bitcoin, Gold, Brent, Ftse, Dax)
    - 5 minute charts showing real-time price action for (Dollar index, WTI oil, Gold, S&P, Russell, Nasdaq)
    - Live stream economic calendar showing US, UK and European price sentsitive releases
    - Aggregated live news feed showing price sensitive events
- Index-Dash:
    - Daily end of day charts for Brent oil, Gold, S&P, Russell, Dow, Nasdaq including 50 and 20 day simple moving average indicators
    - 15 minute derivative chart for each of the above showing 24 hour data including the equivalent 5 day moving average and the 20 period moving average 
- Sector-Dash:
    - The same chart set up as the Index-Dash but using the US sector ETF products
- Stock-Dash:
    - Daily chart with 50 and 20 day moving average coupled with a 15 mintue equivalent both of which have access to all the technical anaylsis tools and can be used to view any stock end-of-day data
    - 15 minute that can be manually set to view the same stock in order to view the product with multi timframe perspective
    - Product table that is used to sort and identify stocks for further analysis
    - Company fundamental sheet showing financial data for a given stock
    - Yahoo finance stock page iframe, providing the option to view latest news for a firm and dig deeper into the fundamentals 

## Interactive Elements
- Main nav bar (top):
    - Home (landing page)
    - Dashboards drop down menu:
        - Intraday-Dash
        - Index-Dash
        - Sector-Dash
        - Stock-Dash
    - Help Guide (link to live pdf)
    - contact
    - Subscribe
- Nav bar (bottom):
    - Dashboards drop down menu
    - Contact tab to be taken directly to the contact page 
- Home:
    - Top nav bar taking the visitor directly to any other page and dashboard (opening in new tab)
    - Nav bar tabs to have subtle hover effects and clearly highlight the active page
    - Hero section to house the subscribe pop up modal.  The button to transition in from the left once the page has loaded in order
      to demand the visitors attention 
    - The introduction section has a video, click to watch. The video will transition in as the visitor scrolls to the section 
    - below that the four videos, click to watch
    - the section below that has the carousel which can be clicked to scroll with the scroll buttons having a hover effect
    - The footer has the drop down dashboard menu so visitors can go straight to the dashboard of choice
- Intraday-Dash:
    - The navbar and footer are the same as the home page and for all pages
    - The charts can be focused by zooming in and out by hovering over and using the scroll wheel
    - The economic calendar can be viewed per day or week and scrolling to view more items
    - The news feed can be targeted by clicking on the different tabs (stocks, economy etc) 
- Index-Dash:
    - Charts can be focused, indicators can be used, levels and trend lines can be used
- Sector-Dash:
    - Same as Index-Dash
- Stock-Dash:
    - Same as Index-Dash + Tickers can be changed
    - Product table can be manipulated to sort for different factors to identify stocks to analyse
    - Yahoo finance can be used built into the page to further investigate a stock
- Contact:
    - From any page the visitor can click on the contact tab within the top nav bar 
    - The visitor can either fill out the email form or schedule a call via the calendly iframe


## Wireframes
- <a href="https://drive.google.com/file/d/1Jn4S5cN2eFrukOsO2bPfAb-cy5xWjeHz/view?usp=sharing" target="_blank">Home Page</a>
- <a href="https://drive.google.com/file/d/1aITAXgC1CGzhOjHkTlIV4zVKPf2yWTWu/view?usp=sharing" target="_blank">Intraday-Dash</a>
- <a href="https://drive.google.com/file/d/1qR7FKHJLdTnKZOox4XdbleHD22O5mdA3/view?usp=sharing" target="_blank">Index-Dash & Sector-Dash</a> The content on these pages share the same layout
- <a href="https://drive.google.com/file/d/1Aig8JQTAcyhAHxOhmB-DuL6AEhP1l-iN/view?usp=sharing" target="_blank">Stock-Dash</a>
- <a href="https://drive.google.com/file/d/1JFBV0aoyAFV705kkztWESV4dcUmBBD93/view?usp=sharing" target="_blank">Contact Page</a>



## Design
- Color Scheme
    - The colour scheme is a work in motion because in order to maintain a 3-4 colour pallete I will need to work with the limiting factors of using 3rd party features.
      Because the 3rd party features are being sourced through three different providers the challenge is to present them all as one, in a clean and uniformed design.
      The final design may have a dark or light theme and the goal is to have two main contrasting colours using 2 futher main accent colours.  

- Typography
    - Again depending on which provider is mostly used for the 3rd party widgets the website typography will be set to best match this.

- Images
    - Due to the nature of the website there is not much real-estate for many images however a choice hero image will be used on the home page and potentially a further feature image on the contact page.
      The images need to be in keeping so as to contrast nicely with the existing colour pallete.

Overall with the design, a focus during development is to maintain a clean and subtle look as the website is jam packed with user features that could become too busy very quickly.

# Development Stage

## Project Management
### Sprint 1 - Set-up and Template 
- [X] Create the file structure
- [X] Add boiler plate code to index.HTML including links to external files:
    - Boostrap CDN
    - Font Awesome
    - Add JS links to the bottom of the body
    - Add Title and description within head
    - Add icon to title browser tab
- [X] Link css stylesheet below Boostrap and Font awesome and add Google fonts to top of style.css file
- [X] Set up stylesheet.css defaults
- [ ] Create the top nav bar:
    - [ ] Build the structure including the drop down for the dashboards
    - [ ] Add the before icon to the logo
    - [ ] Style the nav bar so it works well for tablets and desktops
    - [ ] Add the burger menu functionality for mobile devices
    - [ ] Add and refine hover effects and active tab styling
- [ ] Adjust the top nav bar and create the footer
    - Remove Contact, Guide, Subscribe
    - move Dashboards to the right
    - Add Copyright to the center
- [ ] Validate HMTL and CSS
- [ ] Add template to all pages
- [ ] Adjust active tab and file name for each page
- [ ] Make sure all 3rd party code is labelled with comments and any credits complete 
- **Milestone 1:** To have the project set-up and have the common code in place to use across the website pages ready to begin work on page specific tasks 

### Sprint 2 - Create trading dashboards
- [ ] Index-Dash
    - [ ] Build the Boostrap grid system to house the charting widgets allowing for mobile, tablet and deskptop layouts
    - [ ] Add styling classes to the HTML and basic styling within style sheet
    - [ ] Embed chart widgets
    - [ ] Test the analysis functionality of the charting widgets and work with the variables until suitable
        - Ability to zoom in and out of chart
        - Ability to add trend lines and levels 
    - [ ] Refine styling to allow for a clean and cohesive look and feel
    - [ ] Validate HTML and CSS
- [ ] Sector-Dash
    - [ ] Copy and paste from Index-Dash then add further rows to accomodate the US sector ETF's
    - [ ] Swap the index products for the sector chart widgets
    - [ ] Test the functionality of the chart widgets
    - [ ] Make any refinements to the styling
    - [ ] Validate HTML and CSS
- [ ] Stock-Dash
    - [ ] Build the Boostrap grid system for the page adding styling classes in the process 
    - [ ] Add basic styling to the page
    - [ ] Add analasis widgets see what works together and try different options
    - [ ] Once settled, refine the styling to bring the page together
    - [ ] Validate HTML and CSS 
- [ ] Intraday-Dash
    - [ ] Build the Bootstrap grid system for the page adding classes for screen sizes and for styling
    - [ ] Add basic styling
    - [ ] Add the Ticker widgets and test how they adjust for screen sizes, making adjustments as needed
    - [ ] Add the chart widgets refining styling so they are cleanly spaced
    - [ ] Add the economic calendar refining the grid size to best match the widget also setting the display to none for mobile devices
    - [ ] Add the news feed widget
    - [ ] Make any final styling refinements
    - [ ] Validate HTML and CSS
    - [ ] Confirm all hmtl and css code is clearly organised with comments
    - [ ] Make sure all 3rd party code is labelled with comments and any credits complete  
- **Milestone 2:** Trading dashboards complete and working correctly, the main purpose of the site for users has been achieved  

### Sprint 3 - Create content for Home & Contact page
- [ ] Create User Guide pdf and save to google drive, get public link and add to user guide link in the top nav bar to open a new tab and test
- [ ] Create home page videos:
    - [ ] Introduction
    - [ ] Intraday-Dash
    - [ ] Index-Dash
    - [ ] Sector-Dash
    - [ ] Stock-Dash
- [ ] Create YouTube account and upload videos
- [ ] Obtain 3x testimonials from traders and create content for carousel
- [ ] Identify Hero image and save
- [ ] Identify cantact page image and save
- **Milestone:** All content for home and contact page now prepared for website

### Sprint 4 - Complete Home and Contact page  
- [ ] Home Page
    - [ ] Build the Boostrap grid to house all the content and Features
    - [ ] Add classes to adjust layout for each screen size
    - [ ] Add classes to make provisions for core styling
    - [ ] Add basic styling to stylesheet
    - [ ] Add the hero image, styling it to fit, adding css parallax effect and potentially adding an opaque layer
    - [ ] Add Hero image heading, sub heading and style including positoning (allow space for subscribe button to come)
    - [ ] Add text to introduction section, add introduction video
    - [ ] Add the four videos to the dashboard videos section and refine style if needed
    - [ ] Add the structure to the carousel section and add testimonials
    - [ ] Add text to subscribe section and add subscribe modal button (modal form to be added later)
    - [ ] Add bottom section text and add contact button (leading to the contact page) 
- [ ] Contact Page
    - [ ] Build Bootstrap grid layout for page
    - [ ] Add classes to adjust for srceen size
    - [ ] Add style classes
    - [ ] Add background image to top section adding an opaque layer to contrast with heading text
    - [ ] Add heading and sub heading text to top section
    - [ ] Style top section
    - [ ] Add email/message form and style
    - [ ] Add Calendly 'schedule a call' form and style
    - [ ] Validate HTML and CSS
    - [ ] Confirm all hmtl and css code is clearly organised with comments
    - [ ] Make sure all 3rd party code is labelled with comments and any credits complete
- **Milestone:** Home & Contact page content and structure in place  

### Sprint 5 - Adding call-to-action functionality and element transitions
- [ ] Home page hero section subscribe button to transition in from the left on page load
- [ ] Contact section at the bottom of the home page to transition in from the bottom on scroll 
- [ ] Work out how best to receive emails or at least collect contact details from visitors by leveraging a free 3rd party back end
- [ ] Adding either mailchimp form to home page hero modal form section or the google sheets option (to be worked out at this time)
- [ ] Add the same solution from the above to the email form on the contact page
- [ ] Validate HTML and CSS
- [ ] Confirm all hmtl and css code is clearly organised with comments
- [ ] Make sure all 3rd party code is labelled with comments and any credits complete 
- **Milestone:** Call-to-action elements functional and appear in front of the visitor in the natural flow of content


## Bugs & Solutions:
- **Bug:** The justify-content-center bootstrap class is not centering the navbar ul
    - [] Solution



##  HTML & CSS Testing
- [ ] HTML code Tested 
- [ ] CSS code Tested  

## Testing User Stories

### First Time Visitor Goals:
    - fighjfg

### Returning Visitor Goals:
    - ksdkndn


### Frequent User Goals:
    - wesegirtfgn

## Device Testing
- [ ] The website works on all devices

## Browser Testing
- [ ] The website works on Chrome, Firefox, Edge & Safari

## Credits
- Code:
    - djfbnd

- Content:
    - gueru

- Media:


- Acknowledgments:


# Deployment

## GitHub Pages

## Forking

## Local Clone

# Technologies

## Languages
- HMTL5
- CSS3

## Frameworks, Libraries & Programs
- GitHub
- Git
- GitPod
- Balsamiq
- Bootstrap v4.5
- JQuery
- Google Fonts
- Font Awesome
- Hover.css
- CSS.Tricks

[Back to the top](#TraderDash)