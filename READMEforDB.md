In mongodb
mongodb://<dbuser>:<dbpassword>@ds145405.mlab.com:45405/aahaar
database: "aahaar"
collection: "recipes"
documents: 
{
    "title":"Kachori",
    "url":"https://www.youtube.com/watch?v=ZGwMk14VTB8&t=199s",
    "description":"Delhi wali kachori",
    "author":"Sanjyot Keer"
}
{
    "title":"Mango Icecream",
    "url":"https://www.youtube.com/watch?v=7aRjmc-vDPs",
    "description":"Mango Icecream from Your Food lab",
    "author":"Sanjyot Keer"
}


APIs::::
GET::localhost:3000/api/recipes
GET BY  ID::localhost:3000/api/recipe/5ee38d2e7c213e044cc42b11
POST::localhost:3000/api/recipe
UPDATE::localhost:3000/api/recipe/5ee38d2e7c213e044cc42b11
DELETE::localhost:3000/api/recipe/5ee38d2e7c213e044cc42b11