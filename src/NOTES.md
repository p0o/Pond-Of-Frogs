<!---
Add your comments / notes and thoughts to this doc

Any special instructions to running your code?
-->
# What is this?
It's a simple app which you can add frogs to the pond. Each frog have a random name, a gender and an age which is incrementing after birth. Every frog also is a fan of a football club selected randomly. You can change each behavior by clicking on the behavior and by clicking on age the frog will die.

# Getting Started
This project is created with Angular JS and is using a small stack of development dependencies like compass,browserify,watchify,uglify-js and npm to handle the development environment. Stylesheets are also written with Sass but no CSS framework is used in the project.

Since I already included build files you don't need to go through these steps to view the project. You only need it if you want to start development environemnt. All angular files will be outputed into one single file for optimization and performance purposes.

NPM package manager is needed to install project dependencies and start automation tasks. In order to download modules run this command in the root of the project:

```bash
npm install
```
You can start changing files by running this command. It will automatically detect all changes and output them into /build directory. This command monitor Sass and JS files in real time.

```bash
npm run start
```
And in order to output files in production quality (compressed css and uglified javascript) run this:

```bash
npm run build
```

Thanks for using!