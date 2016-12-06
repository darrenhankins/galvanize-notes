### Entity Relationship Diagram

<img src='./images/data_model.gif' width="600">
http://www.vertabelo.com/blog/technical-articles/crow-s-foot-notation

ERD Symbols
```
one-to-one ---
one-to-many -|--<-
many-to-many ->--<-
one-and-only-one-to-many -|-|--<-
zero-or-one -0|----
```

- `Advert_Publishers` has many `Adverts`
- `Adverts` has many tags
- `Tags` has many `Adverts_Tags`
- `Tags` has many `User_Interests`
- `User_Interests` has many `Online_Users_Adverts`
- `Adverts_Tags` has many `Online_Users_Adverts`
- `Online_Users` has many `User Interests`

Sample Data Per Table
- `Advert_Publishers` had publisher_id
- ``
