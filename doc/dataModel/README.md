# Data Model

## User

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| name | `String` | `false` | ---
| surname | `String` | `false` | ---
| username | `String` | `false` | ---
| email | `String` | `false` | ---
| password | `String` | `false` | ---
| folders | `Array<Folder>` | `true` | []

## Folder

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "folder without title"
| files | `Array<File>` | `true` | []
| remove | `Boolean` | `false` | false
| JWTShare | `String` | `true` | ---

## File

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "file without title"
| content | `String` | `true` | ---
| remove | `Boolean` | `false` | false

## Draw.io

You can [check it here](https://drive.google.com/file/d/1JNCK6L30wAo3_30VOl6llrdGyUGqZhMo/view?usp=sharing)

![Imgur](https://i.imgur.com/UjdkArA.png)