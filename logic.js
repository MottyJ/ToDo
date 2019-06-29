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
                <span className="red logo">do</span>
                <span className="logo"><span className="red">-</span><span className="green">-</span></span>
                <span className="green logo">ne</span>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: "",
            listOfItems: [],
            listOfDone: []
        }
        this.addItem = this.addItem.bind(this)
        this.checkForEnter = this.checkForEnter.bind(this)
        this.done = this.done.bind(this)
        this.undone = this.undone.bind(this)
        this.deleteDo = this.deleteDo.bind(this)
        this.deleteDone = this.deleteDone.bind(this)
    }
    addItem() {
        this.state.listOfItems.push(this.state.textInput)
        this.setState({
            textInput: "",
            listOfItems: this.state.listOfItems
        })
    }
    checkForEnter(e) {
        if (e.keyCode === 13) {
            this.addItem()
        }
    }
    done(e) {
        this.state.listOfDone.push(e.target.textContent)
        this.setState({
            listItems: this.state.listOfItems.splice(e.target.id, 1)
        })
    }
    undone(e) {
        this.state.listOfItems.push(e.target.textContent)
        this.setState({
            listItems: this.state.listOfDone.splice(e.target.id, 1)
        })
    }
    deleteDo(e) {
        e.preventDefault();
        this.setState({
            listItems: this.state.listOfItems.splice(e.target.id, 1)
        })
    }
    deleteDone(e) {
        e.preventDefault();
        this.setState({
            listItems: this.state.listOfDone.splice(e.target.id, 1)
        })
    }
    render() {
        var listItems = this.state.listOfItems.map((item, index) => <li className="to-do-ex" id={index} key={index} onContextMenu={this.deleteDo} onDoubleClick={this.done}>{item}</li>)
        var doneItems = this.state.listOfDone.map((item, index) => <li className="done-ex" key={index} id={index} onContextMenu={this.deleteDone} onDoubleClick={this.undone}>{item}</li>)
        return (
            <div className="main">
                <div className="input-container">
                    <input value={this.state.textInput} onChange={(e) => this.setState({ textInput: e.target.value })} name="do" className="my-input" onKeyUp={this.checkForEnter} type="text" placeholder="take out the trash..."></input>
                </div>
                <div className="dos">
                    <div className="to-do">
                        <h1 className="do-title">do</h1>
                        <ul className="to-do-list">
                            {listItems}
                        </ul>
                    </div>
                    <div className="done">
                        <h1 className="done-title">ne</h1>
                        <ul className="done-list">
                            {doneItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);