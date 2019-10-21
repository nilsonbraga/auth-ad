# auth-ad
Api to check an user on Active Directory. Check login and check member of a group methods.

--------------------------------------------------------------------------------------------

This is an Active Directory login API.
This API has two routes that receive parameters via PUT / JSON:

/ login, verify the login with username and password.
entry {username, password}

/ loginGroup, check login and check if user belongs to an AD group
entry {username, password, groupName}

The return will be an array of objects containing:
user: user: { login, isMember, groupName, username },
token: // token jwt

--------------------------------------------------------------------------------------------

Configure as credenciais do Active Directory no arquivo /src/config/auth.js

--------------------------------------------------------------------------------------------

