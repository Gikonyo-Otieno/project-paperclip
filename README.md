# PAPERCLIP

This website was built with the intention of it being an online, fully automated, ticket vendor.
The objectives set out were:
1. Ability to buy and sell tickets
2. Ability to pursue CRUD functions
3. Ability to access any kind of ticket from one website

The Application is divide into modules i.e
1. Events (Home)
2. Movies
3. Airline 
4. Sell

# Events
This module also serves as the landing page of the website. It contains a hero-header as well as some event cards that are fetched from the db.json file. The event cards are displayed dynamically. They can be deleted by use of the button labeled 'X'. A posting action is performed on them in the 'Sell' module. 


# Movies
This module serves to display movie cards. It shows movies that are now showing in cinemas. Currently its data is found in the 'PricingCardData.js' component but I plan on building an API for them.


# Airline
This module displays available airline tickets. The  data is found in the 'AirlineCardData.js' component. However plans are in place to overhaul the component to give better functionality and ability to search for flights.

# Sell
This module displays a form that is used to collect information on new events. The information is then compiled and posted to the API and in turn displayed as a new card in the events module (homepage) 

