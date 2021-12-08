<h1 align="center">Frontend Reactjs</h1>

![2](https://user-images.githubusercontent.com/79747022/138426402-b8c4baf4-c1ed-4ee2-9005-157c8ada8883.png)

<div align="center">

<a href="https://github.com/Dezenix/frontend-reactjs"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/Dezenix/frontend-reactjs"><img src="https://img.shields.io/badge/Built%20by-Designers-0059b3"></a>
<a href="https://github.com/Dezenix/frontend-reactjs"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/smaranjitghose/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?v=103"></a>

<a href="https://github.com/Dezenix/frontend-reactjs/graphs/contributors"><img src="https://img.shields.io/github/contributors/Dezenix/frontend-reactjs?color=brightgreen"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/stargazers"><img src="https://img.shields.io/github/stars/Dezenix/frontend-reactjs?color=0059b3"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/network/members"><img src="https://img.shields.io/github/forks/Dezenix/frontend-reactjs?color=yellow"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/Dezenix/frontend-reactjs?color=yellow"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/pulls"><img src="https://img.shields.io/github/issues-pr/Dezenix/frontend-reactjs?color=brightgreen"></a>
<a href="https://github.com/Dezenix/frontend-reactjs/pulls?q=is%3Apr+is%3Aclosed"><img src="https://img.shields.io/github/issues-pr-closed-raw/Dezenix/frontend-reactjs?color=0059b3"></a>
<!-- <a href="https://github.com/Dezenix/frontend-reactjs/issues"><img src="https://img.shields.io/github/issues/Dezenix/frontend-reactjs?color=0059b3"></a> -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">
</div>

<h2 align="center">About the Repository</h2>

We are on a mission to make things easy and convenient for all the users who just want to save their time. This repository consists of all the development components that are being used while coding an end to end website along with fully coded components in ReactJS. The main goal is to save your time by providing the complete code snippet with a fully responsive design of all the components that you may use in your development journey. At the later stage, the project is planned to be get converted into a library so that the components created can directly be used by importing and calling through classes. We always encourage new ideas. Feel free to get in touch with us and join our [Discord Server](https://discord.gg/F3TtF5AHKz) for updates.

## 💯open source programs this repo has been part of
<div align="center">
<img src="https://user-images.githubusercontent.com/79747022/144798160-551b0f37-58d4-4f59-809e-d0f5e3f437c3.png" width="120px"> 
<img src="https://user-images.githubusercontent.com/79747022/144800351-13fa1e9d-6417-4330-bc87-00d33404cc76.png" width="150px">
</div>

## ⚒️ Contribution Guidelines

Are we missing any of your favourite features, which you think you can add to it? We invite you to contribute to this project and improve it further.

#### 1. Clone and Setup:
* Clone and Setup the repository by following the steps mentioned [here](https://github.com/Dezenix/.github/blob/main/CONTRIBUTING.md).

#### 2. Setup dev environment
* This repository is divided into 2 parts
  - Library ```src/*```
  - Example ```example/*```

##### 2.1 Setting up library environment

This is where all your components will be

* Install all dependencies

``` bash
yarn install
```

* Watch for file changes and build 

``` bash
yarn start
```

##### 2.2 Setting up example environment
This is where you can see your component implementation

* Change directory to [example](/example) folder

``` bash
cd example
```

* Install all dependencies

``` bash
yarn install
```

* Start a live server on localhost

``` bash
yarn start
```

A server should start on localhost where you can view all the examples
 

#### 3. Add your Components:
* All the usermade components should be made under [`src/lib-components/{component_name}`](https://github.com/Dezenix/frontend-reactjs/tree/main/src/lib-components) here `{component_name}` is the name of your component in **snake_case**.
* CSS files should follow this syntax `{name}.module.css` here `{name}` can be anything you want but in **snake_case**. This is due to the fact that we are transpiling the css classnames to avoid any conflicts between 2 or more modules. Due to this, simple importing your CSS file will no longer work. You will have to named import your css files and then treat them as a dictionary to use your CSS classnames.
* Components should make use of props to display images or strings.
* We also request you to **not make use of any network components**. For fonts, it would be better if you make use of default browser provided fonts. This is because we can't always be sure which license is used in 3rd party stuff. In future, we do plan to provide more fonts that will be licensed properly.

#### 4. Export your Component:
* The User-made modules should be exported in [`src/index.js`](/src/index.js).

#### 5. View your Component:
* A simple example should be added in [`example/src`](/example/src) demonstrating your component.

## 👨‍💻 Our valuable Contributors

This project exists thanks to all the **people who contribute**.

![Contributors](https://contributors-img.web.app/image?repo=Dezenix/frontend-reactjs)

## ❤️ Code of Conduct

Please note that Dezenix has a [Contributor Code of Conduct](https://github.com/Dezenix/.github/blob/main/CODE_OF_CONDUCT.md). By participating in this project online or at events you agree to abide by its terms.

## 📜 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) © Dezenix

![thank you](https://user-images.githubusercontent.com/79747022/138315571-2fada971-61f9-4008-9fa0-ac60bd655056.png)
