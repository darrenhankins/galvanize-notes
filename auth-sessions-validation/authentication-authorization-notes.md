### Authentication & Authorization
https://docs.google.com/presentation/d/1YekEt5Ik5KOCwvMioAVi4Za00Tdtpwki6y-StaSWwFA/edit#slide=id.p
https://docs.google.com/presentation/d/1jCwEtq5aeLw_He0gbgMWLxe3MtbR2_6J1tbriQhS5yw/edit#slide=id.p


These are the articles with the videos you should watch tonight:
This article has 2 really good videos embeded on Authorization/Authentication and Middleware for Auth. The video on middleware is really good as well!
https://learn.galvanize.com/content/gSchool/node-curriculum/master/Express/Authorization.md
Embedded all the way at the bottom, a video on cookies: https://learn.galvanize.com/content/gSchool/node-curriculum/master/Express/Cookies.md
Towards the middle, a video on cookie session: https://learn.galvanize.com/content/gSchool/node-curriculum/master/Express/Sessions.md
##### Authentication
  - who are your

##### Authorization
  - what are you allowed to do


##### Signing Up
  - email / password
  - does it exist?
  - If no (pasword hashed)
  - create a user with email and hashed password in db

#### Signing in
  - find user by email
  - hash password of user
  - compare the hashed password with the db password
  - set a cookie


##### Cookies
  - information passed in every request/response
  - `set-cookie` http header
  - `max-age` and `Expires` on a cookie

  `document.cookie.views` store a cookie locally in variable views

  `res.cookie('user_id', something);`
  `res.cookie.user_id=something`

##### Hashing Function (One way)
  - Always get the same result

##### Signed Cookies
  `var cookieParser = require(cookieParser)`
  `app.use(cookieParser(process.env.COOKIE_SECRET))`
  `res.cookie('user_id', , {signed:true})`
