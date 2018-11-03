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
const template2 =(
    <div>
        <h1>{user.name ? user.name :'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);