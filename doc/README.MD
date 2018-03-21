# About MDitor

## Technologies

| styles| Front-End | Back-End| TDD|
| :----------: | :----------: | :----------: | :----------: |
| [Sass](https://sass-lang.com/) | [ReactJS](https://reactjs.org/)  | Node   | [Jest](https://facebook.github.io/jest/)
| [Materialize](https://react-materialize.github.io/#/) | ES6  | TS  | [Mocha](https://mochajs.org/)
| [Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | mditot-type  | RestFul  | [Cosmos](https://github.com/react-cosmos/react-cosmos)

## Client Site

### Design - Mockup

the mockup has been done with  [Sketch](https://www.sketchapp.com/)

[Demo - Mockup MDitor](https://github.com/VGamezz19/MDitor/tree/master/doc/design/mockup)

## Mditor-Types Site (Mandatory data type in Client Site)

Mditor use strict a custom type `File`. All **Client Site** use this type.

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

### Sintaxis

```ts
new File(type: "(file|folder)", id: string, title: string, content?: string, files?: File)
```

### API File

```ts
getId(): string

getTitle(): string

getType(): string

/**
  * Only with file Type
**/
getContent(): string | never

/**
 * Only with folder Type
**/
getFile(id: string): File | never

setTitle(title: string)

/**
 * Only with file Type
**/
setContent(content: string)

/**
 * Only with folder Type
**/
add(childr: File)

/**
 * Only with folder Type
**/
remove(childr: File)
```

## ApiClient

... Doing

## Server Site

Check CodeCoverage here http://coverage-serversite-mditor.surge.sh/

![Imgur](https://i.imgur.com/rA4v6H8.png)

## Data Model

It only need three data model, User, Folder and File.
`Users` will have {N}  `Folder`, and the Folders will contains {N} `Files`.

To check out more my data model, __[see It here](https://github.com/VGamezz19/MDitor/tree/master/doc/dataModel/)__

## UML

__[Click here](https://github.com/VGamezz19/MDitor/tree/master/doc/UML/)__ to see project UML

## Work Flow

### TimeLine

__[Click here](https://github.com/VGamezz19/MDitor/tree/master/doc/timeLine/)__ to see project timeline

### Agile methodologies / Scrum

Kanban board realase with **4 sections**, `TOOD, DOING, REVIEW and DONE` like a `Scrum` Kanban

See it in Trelo, URL: [https://trello.com/b/XFltOxOW](https://trello.com/b/XFltOxOW)