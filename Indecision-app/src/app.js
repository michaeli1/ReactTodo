class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}
class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlepick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        alert(this.props.options);
    }
    render(){
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <button onClick={this.removeAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    submitForm(evt) {
        evt.preventDefault();
        const option= evt.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
    }
    render(){
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));