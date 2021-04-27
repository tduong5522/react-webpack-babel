Introduce
Build a simple webapp by React and config web by Webpack

Concept
Babel which is a toolchain will convert code React or ES6 to ES5, etc.
Webpack is used to bundle files JS but it only understarnd code JS and JSON.
Therefore, we need to use a loader feature of the webpack to load other file like css, scss, txt, etc.
So babel will help solve the matters which webpack will face with code React.

Error:

1. Module parse failed: ReactDOM.render()
![image](https://user-images.githubusercontent.com/82302174/116180783-b407f580-a743-11eb-9979-00f26ac76135.png)

2. After run npx webpack file index have only file bunlde imported into HTML file. And code React below can't get element for render.
const appElement = document.getElementById('root');
ReactDOM.render(<App/>, appElement);

Solve:
1. add module babel-loader into webpack.config.js to babel convert code React and JSX to JS.
- add this text into webpack.config.js
{
    ...,
    module: {rules: [{test: /\.(js|jsx)$/, use: 'babel-loader'}],},
    ...
}
- create a file config for babel with name .babelrc and add config like this:
{
    "presets": ["@babel/preset-react"]
}

2. https://github.com/jantimon/html-webpack-plugin use option "template" will hold format of own file and then a file bundle will be added.
{
    ...,
    plugins : [
        new HtmlWebpackPlugin({
            title: "React App With Webpack",
            filename : "index.html",
            template: './src/index.html',
        })
    ],
    ...
}
