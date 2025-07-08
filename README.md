[![Release to staging](https://github.com/UniversityOfHelsinkiCS/jami/actions/workflows/staging.yml/badge.svg)](https://github.com/UniversityOfHelsinkiCS/jami/actions/workflows/staging.yml)

# Jami

Jämpti autorisaatio mankeli IAM:eille

## Running locally

Requirements: docker, npm

```sh
# Install dependencies
$ npm i
# Start the server (you can also use npm start)
$ docker compose up
```

Jami API should now be available at http://localhost:3000/. Configure the port for your needs in `docker-compose.yml`.

If you need the importer client to work locally (to fetch a person's Sisu roles), you will need an api-gw token. Check documentation in GitLab for information on how to get one. If you already have a token for Oodikone, you can use that. Otherwise, select "Oodikone" when creating a new token. Once you have the token, add it to the `.env` file like this:

```sh
IMPORTER_DB_API_TOKEN=your-token-here
```


## API

### `POST /`

- Body

```json
{
  "userId": "hy-hlo-12345678",
  "iamGroups": ["hy-employees", "grp-toska"]
}
```

- Response

```json
{
  "500-M009": {
    "read": true,
    "write": true,
    "admin": true
  },
  "T920101": {
    "read": true,
    "write": false,
    "admin": false
  },
  "specialGroup": {
    "superAdmin": true
  }
}
```

### `POST /user-organisations`

- Response

```ts
Array<Faculty>
```

### `GET /:userId`

- Response

```json
{
  "id": "hy-hlo-12345678",
  "iamGroups": ["hy-employees", "grp-toska"],
}
```

### `GET /access-to-all`

- Response

```json
{
  "500-M009": {
    "read": true,
    "write": true,
    "admin": true
  },
  "T920101": {
    "read": true,
    "write": true,
    "admin": true
  },
  // ...
  "specialGroup": {
    "allProgrammes": true
  }
}
```

### `GET /organisation-data`

- Response: the FACULTIES object from [./src/organisation/faculties.ts](./src/organisation/faculties.ts)

### `GET /all-access`

- Response: all user's iam groups and their computed access rights:

```json
  [
    {
      "id": "hy-hlo-12345678",
      "iamGroups": ["hy-employees", "grp-toska"],
      "500-M009": {
        "read": true,
        "write": true,
        "admin": true
      },
      "T920101": {
        "read": true,
        "write": false,
        "admin": false
      },
      "specialGroup": {
        "superAdmin": true
      }
    },
    // ...
  ]
```

### `POST /access-and-special-groups`

Like `GET /all-access`, but for a specified list of users. This endpoint also includes the information about full access to student data in Sisu.

**NB!** Might be slow for large amounts of users, if Sisu access info is not in the cache (currently stored for 24 hours).

- Body

```json
{
  "userIds": ["hy-hlo-12345678", ...],
}
```

- Response

```json
[
  {
    "id": "hy-hlo-12345678",
    "iamGroups": [
      "hy-employees",
      "grp-toska"
    ],
    "access": {},
    "specialGroup": {
      "superAdmin": true,
      "fullSisuAccess": true
    }
  },
  ...
]
```

### `GET /iam-groups`

- Response: all unique iam groups in Jami DB:

```json
["grp-toska", "hy-employees"]
```

### `GET /jory-map`

- Response joryMap from auth/IAMConfig.ts

### Other routes

`GET` `/ping` => `pong`
