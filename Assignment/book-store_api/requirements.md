# Book Store API

## Requirements

- add book
- find book by id
- find book by name
- find book by price
- update books by id
- remove book by id
- remove book by author

## Models

### Book:

- id
- author
- bookname
- price
- dateCreated
- dateUpdated

## Routes

- / [GET] get all books
- /add [POST] add a book
- /find/id/:id [GET] find a book by id
- /find/bookname/:bookname [GET] find a book by name
- /find/bookprice/:bookprice [GET] find a book by price
- /search?price_bellow=price [GET] search by price under an amount
- /search?price_above=price [GET] search by price above an amount
- /update/:id [PATCH] update a book
- /remove/:id [DELETE] remove a book
- /remove/:author [DELETE] remove all books of an author
