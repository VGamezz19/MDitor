# About MDitor

## Technologies

| styles| Front-End | Back-End| Test|
| :----------: | :----------: | :----------: | :----------: |
| [Sass](https://sass-lang.com/) | [ReactJS](https://reactjs.org/)  | Node   | [Jest](https://facebook.github.io/jest/)
| [Materialize](https://react-materialize.github.io/#/) | ES6  | TS  | [Mocha](https://mochajs.org/)
| [css-Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | mditot-type  | RestFul  | [Cosmos](https://github.com/react-cosmos/react-cosmos)

## UML

You can [preview It](https://drive.google.com/file/d/1tad0wKucvZKmhCi6kJr_NYMFJVokqn6o/view?usp=sharing) in draw.io

![Imgur](https://i.imgur.com/DXp3SZG.png)

## Client Side

### Design - Mockup

the mockup has been done with  [Sketch](https://www.sketchapp.com/)

[Demo - Mockup MDitor](https://github.com/VGamezz19/MDitor/tree/master/doc/design/mockup)

### UML Client

![Imgur](https://i.imgur.com/SJiLT3L.png)

### Test client && Cosmos demo

Check Cosmos demo here http://nappy-cosmos.surge.sh/

![Imgur](https://i.imgur.com/q6GofTo.png)

## Mditor-Types (Mandatory data type in Client Side)

Mditor use strict a custom type `File`. All **Client Side** use this type.

### More about File

File folow the software patter [**Composite**](https://en.wikipedia.org/wiki/Composite_pattern)

```sh
    - File("folder", "someID", "my-project")
        - File("file", "someID", "README.MD")
    - File("folder", "someID", "SRC folder")
        - File("file", "someID", "index.js")
    - File("folder", "someID", "components")
        - File("file", "someID", "component.js")
        - File("file", "someID", "component.css")
        - File("file", "someID", "index.js")
 ```

As you can see, `composite` pattern is a composition groups of same objects.

Files contain children File, and children File, contains more children Files.

### UML Composite pattern

![Imgur](https://i.imgur.com/kXhmKbA.png)

### Sintaxis

```ts
new File(type: "(file|folder)", id: string, title: string, content?: string, files?: File)
```

### Test mditor-types && Coverage

Check CodeCoverage here http://unwritten-jump.surge.sh/

![Imgur](https://i.imgur.com/nuWS3fA.png)

## ApiClient

### Test api && Coverage

Check CodeCoverage here http://reflective-string.surge.sh/

![Imgur](https://i.imgur.com/ViAf1LA.png)

## Server Side

### Data Model

It only need three data model, User, Folder and File.
`Users` will have {N}  `Folder`, and the Folders will contains {N} `Files`.

#### User

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| name | `String` | `false` | ---
| surname | `String` | `false` | ---
| username | `String` | `false` | ---
| email | `String` | `false` | ---
| password | `String` | `false` | ---
| folders | `Array<Folder>` | `true` | []

#### Folder

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "folder without title"
| files | `Array<File>` | `true` | []

#### File

|  | Type | Null | Default
| :--- | :---: | :---:| :---:
| id | `String` | `false` | MongoId
| title | `String` | `false` | "file without title"
| content | `String` | `true` | ---

To check out more my data model, __[see It here](https://github.com/VGamezz19/MDitor/tree/master/doc/dataModel/)__

### UML Server

![Imgur](https://i.imgur.com/pRvRCpO.png)

### Test server && Coverage

Check CodeCoverage here http://coverage-serversite-mditor.surge.sh/

![Imgur](https://i.imgur.com/rA4v6H8.png)

## Work Flow

### TimeLine

You can [preview It](https://drive.google.com/file/d/1uGGHUBiyll8flWdE9xBCHDdYodnnzY0n/view?usp=sharing) in draw.io

![Imgur](https://i.imgur.com/ULB38Pu.png)

### Agile methodologies / Scrum

Kanban board realase with **4 sections**, `TOOD, DOING, REVIEW and DONE` like a `Scrum` Kanban

See it in Trelo, URL: [https://trello.com/b/XFltOxOW](https://trello.com/b/XFltOxOW)