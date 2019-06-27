class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <SideMenu />
                <Main />
            </div>
        );
    }
}

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="side-menu">

            </div>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            textInput: "",
            counter: 0
        }
        this.x = [];
        this.addItem = this.addItem.bind(this)
    }
    addItem() {
        this.setState({
            item: this.state.textInput.value,
            counter: this.state.counter + 1
        })
    }
    render() {
        for (let i = 0; i < this.state.counter; i++) {
            this.x.push(<div key={i}>{this.state.item}</div>)
        }
        return (
            <div className="main">
                <div className="to-do">
                    <h1 className="do-title">do</h1>
                    <h3 className="to-do-ex">take out the trash</h3>
                    {this.x}
                </div>
                <div className="input-container">
                    <input ref={(input) => { this.state.textInput = input; }} name="do" className="my-input" type="text" placeholder="take out the trash..."></input>
                    <button name="do" onClick={this.addItem} className="add">do</button>
                </div>
                <div className="done">
                    <h1 className="done-title">done</h1>
                    <h3 className="done-ex">take out the dog</h3>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);