console.log("App.js is running");
let app = {
    title: 'My Todo App',
    subtitle: 'Here are the things to do',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderForm();
};

const showOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option =app.options[randomNum];
    alert(option);
    renderForm();
};
const removeAll = () => {
    app.options = [];
    renderForm();
};
const appRoot = document.getElementById('app');
const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={showOption}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderForm();