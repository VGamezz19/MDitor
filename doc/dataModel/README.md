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

## File

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "file without title"
| content | `String` | `true` | ---

## Draw.io

You can [check it in draw.io format](https://drive.google.com/file/d/1JNCK6L30wAo3_30VOl6llrdGyUGqZhMo/view?usp=sharing)

![Imgur](https://i.imgur.com/1yZEM3x.png)