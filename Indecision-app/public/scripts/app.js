'use strict';

console.log("App.js is running");
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);

var user = {
    name: 'Michaeli',
    age: 26,
    location: 'Holland'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
