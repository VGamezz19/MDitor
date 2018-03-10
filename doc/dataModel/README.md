## Data Model

### User

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| name | `String` | `false` | ---
| surname | `String` | `false` | ---
| username | `String` | `false` | ---
| email | `String` | `false` | ---
| password | `String` | `false` | ---
| folders | `Array<Folder>` | `true` | []

### Folder

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "folder without title"
| files | `Array<File>` | `true` | []
| remuve | `Boolean` | `false` | false
| JWTShare | `String` | `true` | ---

### File

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "file without title"
| content | `String` | `true` | ---
| remuve | `Boolean` | `false` | false