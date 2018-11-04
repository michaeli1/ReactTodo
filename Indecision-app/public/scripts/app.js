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
    location: 'NY'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' +1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' -1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            ' reset'
        )
    );
    ReactDOM.render(template2, appRoot);
};
renderCounterApp();
