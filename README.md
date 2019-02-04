# Project Name

Qbox

## Description

Qbox is a web application that facilitates the user to organize their personal items, either for a move or to store objects that are not used on a daily basis.
The user will be able to register and create an inventory, including photos of the objects and to have located in which box it is.
Each box will have an identifying title as well as a QR code label, which the user can scan with the mobile to obtain a list of the objects inside that box.
Said QR code and title of the box will also indicate to the user where his / her location is located, being able to be in a repository, garage, storage room, closet, etc.
The user will also have an object search engine, obtaining the identifier of the box and its location, in case of success in the search.


(revisar la traducción de google translate!)


## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As anon, I can register on the platform to start using the service of organizing boxes.
-  **Login:** As a logged-in user, I can log in to the platform to edit my inventory, create boxes and add / modify / delete content from the boxes.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Create a Box:** As a user I can create a box so that I can fill it with objects.
-  **Fill a Box:** As a user I can fill the box with objects and add a storage location/title.
-  **Generate a QR:** As a user I can generate a QR code for a box.
-  **Scan a QR:** As a user I can scan a QR code of the box so that I can list the box content.
-  **List a Box:** As a user I can see a list of the objects that are in a box.
-  **Modify a Box:** As a user I can add/remove objects | I can change a storage location/title of a box.
-  **Search a Object:** As a user I want to search an object by its name and know in detail in which box it is.
-  **Add a category to box:** As a user I want to add a category to a Box, to have information of its content on its label.
-  **Add to favorites** As a user I want to add a Box to favorite so that I can save the Box that use most often.
-  **See my favorites** As a user I want to see my favorite boxes.


## Backlog
- scan a QR with mobile.
- add a photo to each object.
- record of entries and exits of the boxes, with date of modification.
- password change.
- password recovery. 
- google/facebook login.
- tips for organize a movie.
- todo-list.
- pdf tag with identification icons for printing.
- redo in Angular.

User profile:
- see my profile
- create box
- fill a box
- list of a box
- search a object



Homepage:
- q-box.heroku.com

# Client

## Routes

- `/` 
- HomePageComponent
- public
- `/auth/signup`
- SignupPageComponent
- anon only
- signup form, link to login
- navigate to homepage after signup
- `/auth/login`
- LoginPageComponent
- anon only
- login form, link to signup
- navigate to homepage after login
- `/box` 
- MyBoxListPageComponent
- user only
- shows all my box, links to details
- search box content by name/number
- `/box/create` 
- BoxCreatePageComponent
- user only
- creates a new box
- navigates to box's detail page after creation
- `/box/:id` 
- BoxDetailPageComponent 
- user only
- details of one box
- button to add to favorite
- show star if in favorites already
- `/profile/me` 
- ProfilePageComponent
- user only
- my details
- my favorite box
- boxes created by me
- `404`
- NotFoundPageComponent
- `500`
- ErrorPageComponent


## Components

- Navbar
- Footer
- Auth Form
- Box List
- Objetcs Form
- Search component


## Services

- Auth Service
- auth.login(user)
- auth.signup(user)
- auth.logout()
- auth.me()
- auth.getUser() // synchronous
- Restaurant Service
- restaurant.list()
- restaurant.search(terms)
- restaurant.create(data)
- restaurant.detail(id)
- restaurant.addFavorite(id)
- restaurant.removeFavorite(id)   

# Server

## Models

User model

```
id - 
username - String // required & unique
password - String // required
avatar - String
moves - [ObjectID<Move>]
```

Move model

```
id - 
owner - ObjectID<User> // required
number - Number // required & unique
title - String 
date - Date
origin - String
destination - String
description - String
boxex - [ObjectID<Box>]
```

Box model

```
id -
owner - ObjectID<User> // required
boxnumber - Number // required & unique
boxname - String 
category - String
description - String
storagelocation - String
items - {[nameItem: String, quantity: Number, description: String, image: String]}
```


## API Endpoints (backend routes)

- GET /auth/me
- 404 if no user in session
- 200 with user object
- POST /auth/signup
- 401 if user logged in
- body:
- username
- email
- password
- validation
- fields not empty (422)
- user not exists (409)
- create user with encrypted password
- store user in session
- 200 with user object
- POST /auth/login
- 401 if user logged in
- body:
- username
- password
- validation
- fields not empty (422)
- user exists (404)
- passdword matches (404)
- store user in session
- 200 with user object
- POST /auth/logout
- body: (empty)
- 204
- POST /user/me/favorite
- body:
- restaurantId
- validation
- id is valid (404)
- id exists (404)
- add to favorites if not there yet
- updates user in session
- DELETE /user/me/favorite/:restaurantId
- validation
- id is valid (404)
- id exists (404)
- body: (empty - the user is already stored in the session)
- remove from favorites
- updates user in session
- GET /restaurant?terms=foo
- use search criteria if terms provided
- 200 with array of restaurants
- POST /restaurant
- body:
- name
- phone
- address
- validation
- fields not empty
- create restaurant
- 200 with restaurant object
- GET /restaurant/:id



## Links

### Trello/Kanban

  https://trello.com/b/tpYDgKln/qbox

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/amoreno315/qbox-frontend)
[Server repository Link](https://github.com/amoreno315/qbox-backend)

[Deploy Link](http://q-box.heroku.com)

### Slides

The url to your presentation slides

[Slides Link](https://slides.com/anamoreno-3/qbox/fullscreen)

