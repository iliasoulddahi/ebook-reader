## Endpoints:
List of available endpoints:
- `POST api/v1/login`


## `POST /register`
#### Description
- register a new user

#### Request
- body
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Response
_201 - created_
```json
{
    "message": "User with email johndoe@gmail.com has been registered!",
    "access_token": "token"
}
```

_400 - bad request_
```json
{
  "message": "Password is required"
}
or
{
  "message":"Email format is invalid"
}
or
{
  "message": "Email already registered"
}
```

## `POST /login`
#### Description
- login a user

#### Request
- body
```json
{
  "email": "string",
  "password": "string",
}
```

#### Response
_200 - OK_
```json
{
  "access_token": "string"
}
```

_400 - bad request_
```json
{
  "message": "Invalid email or password"
}
```

## `GET /ebooks`
#### Description
- Get list of ebooks link

#### Request
- headers
```json
{
  "token": "string",
}
```

#### Response
_200 - OK_
```json
[
    {
        "name":"string",
        "url":"string",
        "ownerId":"ID"
        "createdAt":"date",
        "updatedAt":"date"
    },
    {
        "name":"string",
        "url":"string",
        "ownerId":"ID"
        "createdAt":"date",
        "updatedAt":"date"
    },
    {
        "name":"string",
        "url":"string",
        "ownerId":"ID"
        "createdAt":"date",
        "updatedAt":"date"
    },
    {
        "name":"string",
        "url":"string",
        "ownerId":"ID"
        "createdAt":"date",
        "updatedAt":"date"
    }
]
```

_401 - Unauthorized_
```json
{
  "message": "Unauthorized"
}
```
