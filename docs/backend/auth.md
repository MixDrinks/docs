# Auth

The service support some authentication methods:

- Google
- Apple

### The auth flow

```mermaid
sequenceDiagram

    participant Client
    participant FirebaseAuth
    participant OurService

    Client ->> FirebaseAuth: Request for login
    FirebaseAuth ->> Client: GetAuthToken

    Client ->> OurService: Request for login with auth token
    OurService ->> Client: Return user info
```

All requests to the service must contain the `Authorization` header with the `Bearer` prefix and the auth token.

Before start implement auth on your side check the [firebase auth docs](https://firebase.google.com/docs/auth)
