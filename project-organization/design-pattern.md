### Design Patterns
https://docs.google.com/presentation/d/1X1rADnmghyoOIA8rSHuNxacIivc1LIDALKTXWpi3lJI/edit#slide=id.g12e9d330ae_0_50

  - Patterns are `formalized best practices` that the programmer can us to solve common problems when designing an application

  - Example: MVC (model, view, controller)

  - Seperation of Concerns

### MVC

  - Model View Controller (or view model, presenter. its the glue that holds things together)

##### Model
  - `data` object that you get back from the db

##### View
  - how users interact with the app

##### Cthulhu (controller)
  - `decision maker`
  - glue between model and view

#### Common Terms
- `Layout`
  - UI shell of application
  - header, body, container, footer
- `Partial` - reused, just the html, individual smaller pieces
- `Route` - Maps a url to a view and controller
- `Components` - Atomic UI piece that is composable and reusable
