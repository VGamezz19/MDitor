# MDitor

There is a MarkDown Editor to do you'r crazy notes! but **take it care** this is just a alpha, we are going to work to get better MDitor📝

- 🎨 Check Demo MDitor http://mditor.surge.sh

- 👨‍🚀 Check Demo Cosmos MDitor http://nappy-cosmos.surge.sh/

⚠️ Hey! if you want to know how we have done `MDitor`, you can navigate to [./doc](https://github.com/VGamezz19/MDitor/tree/master/doc/)

⚡️ If you just want to know how dowload it, test or add new features, follow theses steps  ⬇️

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Necesita estas tecnologías para ejecutar el proyecto EDitor en su máquina local

- Install [Node](https://nodejs.org/en/download/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- npm TypeScript

```sh
npm install -g typescript
```

### Installing

Clone gitHub repo in your local machine

```sh
git clone https://github.com/VGamezz19/MDitor.git
```

go inside! 🧐

```sh
cd /MDitor
```

then, enter in `./api` and `./mditor-types` and install and build project

#### api

```sh
cd /api

yarn || npm install

yarn build || npm run build
```

#### mditor-types

```sh
cd ../mditor-types

yarn || npm install

yarn build || npm run build
```

Finally, go inside `./client` and install dependencies

#### client

```sh
cd ../client

yarn || npm install

yarn start || npm run start

```

this last command will open new windows in your default browser with MDitor! 😁 👍

## Running the tests

### Client

navigate to `./client` and then ejecute this command:

```sh

cd MDitor/client

yarn test || npm run test

```

It will ejecute Jest test and verify if all components mount correctly.

Then, you can open Cosmos 👨‍🚀 Demo:

```sh

yarn cosmos || npm run cosmos

```

Enter URL `127.0.0.1:8989` in your browsert and test it! 👍

### API-Client

navigate to `./api` and then ejecute this command:

```sh

cd MDitor/api

yarn test || npm run test

```

It will test all api logic (file, folder and user)

### MDitor-types

navigate to `./mditor-types` and then ejecute this command:

```sh

cd MDitor/mditor-types

yarn test || npm run test

```

It will test the data type File

### Server

navigate to `./server` and then ejecute this command:

```sh

cd MDitor/server

yarn test || npm run test

```

It will test all server logic (file, folder and user)

## Authors

- **Victor Gamez** - *web-developer* - [VGamezz19](https://github.com/VGamezz19)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License