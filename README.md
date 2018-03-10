# MDitor

Editor web para crear, guardar y modificar tus notas en formato [MarkDown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Diseño - Mockup

El mockup de `MDitor` se ha realizado en [Sketch](https://www.sketchapp.com/)

[Demo - Mockup MDitor](https://github.com/VGamezz19/MDitor/tree/master/doc/design/mockup)

## Modelo de datos

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

## Tecnologias

| styles| Front-End | Back-End| TDD|
| :---------- | :----------: | :----------: | :----------: |
| [Sass](https://sass-lang.com/) | [ReactJS](https://reactjs.org/)  | Node   | [Jest](https://facebook.github.io/jest/)
| [Materialize](https://react-materialize.github.io/#/) | ES6  | TS  | [Mocha](https://mochajs.org/)
| [Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | [socket.io](https://socket.io/)  | RestFul  | [Cosmos](https://github.com/react-cosmos/react-cosmos)
