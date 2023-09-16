# Lottery API

## Requirements

- Sell lottery ticket
- Update lotttery ticket
- Delete lottery ticket
- Get lottery ticket by id
- Get all tickets
- bulk buy
- raffel draw

## Models

### ticket:

- number (unique)
- username
- price
- date
- timestemp

## Routes

- /tickets/t/:ticketId [GET] - get tickets by ticketId
- /tickets/t/:ticketId [PATCH] - update tickets by id
- /tickets/t/:ticketId [DELETE] - delete tickets by id
- /tickets/u/:username [GET] Find tickets for an user
- /tickets/u/:username [PATCH] update tickets for for an user
- /tickets/u/:username [DELETE] Delete all tickets for for an user
- /tickets/sell [POST] - create ticket
- /tickets/bulk [POST] - bulk sell tickets
- /tickets/draw [GET] - Find winners
- /tickets [GET] - find all tickets
