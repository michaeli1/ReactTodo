console.log("App.js is running");
const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

const user = {
    name:'Michaeli',
    age: 26,
    location: 'NY'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}> +1</button>
            <button onClick={minusOne}> -1</button>
            <button onClick={reset}> reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
};
renderCounterApp();