# saltazonFrontend

## Page Requirements
These are the pages we expect you to create. You are welcome to change smaller parts of the following page requirements if you want to, the most important part is that you follow the list of app requirements above.  
### Login & sign-up page 
### The sign-in page
- Throwing an error if the user’s password is incorrect or if the email doesn’t exist (“Email or password is incorrect”).
- Signing a JWT Token and sending back in response.
- { token: “”, user: {email: “” ….} }
- User is redirected to the Home page
## The sign-up page 
- Email, Password, Type of user (store admin or user)
- Validating if the email has already been used by an existing user
- Validating the inputs (validators like Joi can be used here)
- Password, requirements up to you,  & email is required in correct format
- Password and confirmed password should match
- Saving the user into the DB
- Make sure to encrypt the user's password as you are storing it in the database. Use a library like Bcrypt for this
## Home page
Same for all types of Roles
Once the user is logged in, and redirected to the home page, we should fetch all the products and show them
A search and filter for looking through products 
## Pagination 
(optional) Each product also has a link to the store selling the products
When the user clicks on a product they will be redirected to the products page
## User
Adding items to a cart, saved in local storage
Removing items from a cart
Updating quantity per item in a cart 
Profile page
## User
 (optimal): Can view their entire cart
## Store admin
Add button for adding products
See all the products their store is selling
Can delete products
(optional) A user can view this page, and see all the products a store is selling
## Super Admin
View all the different stores
Can delete an entire store
Can click on a store from the list and redirect to the Stores page. Here they can do everything as the store admin 

