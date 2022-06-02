# JavaScript Frameworks - Course Assignment
<p align="center">
  <img src="https://user-images.githubusercontent.com/71286689/171617605-a725eecb-766a-440d-b634-afc60a90e7e5.png" alt="JS frameworks course assignment homepage" />
</p>

## Description
Create either a new React or Next.js app in this repo.<br/>
For the login functionality, use either a Wordpress installation with the JWT plugin from Module 3 installed, or a local Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.<br/>
You can use either a REST or GraphQL API for the API calls.

### Project requirements
Your app should have the following paths:
- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

#### ***Home page***
Find an API that returns at least:
- an array of items
- a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.<br/>
You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.<br/>
Display at least 2 properties from each result.<br/>
Each result should link to the detail page, passing a parameter in the URL.

#### ***Detail page***
Retrieve the parameter from the URL and use it in an API call to fetch one item. <br/>
Display at least 3 properties from the item.

#### ***Contact page***
Create a form with the following inputs and validation:
- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

#### ***Login page***
Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).<br/>
The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.<br/>
If the login is unsuccessful display a message above the form.

#### ***Admin page***
This page will simply display an "Admin" heading.

### Level 2 (Optional)
Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.<br/>
Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array.

#### ***Login details:***
Username: admin@admin.com<br/>
Password: Pass1234

## Built With
![Nextjs](https://img.shields.io/badge/-NEXT.js-white?style=for-the-badge&logo=Next.js&logoColor=black)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-white?style=for-the-badge&logo=bootstrap)
![Strapi](https://img.shields.io/badge/-Strapi-white?style=for-the-badge&logo=Strapi&logoColor=4e26e0)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:InfiAest/js-frameworks-ca.git
```

2. Install the dependencies:

```
npm install
```

### Running

```
npm run develop
```

## Contact

[![Linkedin Badge](https://img.shields.io/badge/-CharlotteLucas-white?style=for-the-badge&logo=Linkedin&logoColor=0077b5&link=https://www.linkedin.com/in/charlotte-lucas-31544b32/)](https://www.linkedin.com/in/charlotte-lucas-31544b32/)
[![Instagram Badge](https://img.shields.io/badge/-Infiaest-white?style=for-the-badge&logo=instagram&link=https://instagram.com/infiaest/)](https://instagram.com/infiaest)
