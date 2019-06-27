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
        this.delete = this.delete.bind(this)
    }
    delete(e){
        console.log("hello")
    }
    render() {
        return (
            <div className="side-menu">
                <h1 className="red">do</h1>
                <h1><span className="red">-</span><span className="green">-</span></h1>
                <h1 className="green">ne</h1>
                <div className="trash" onDragOver={(e)=>this.onDragOver(e, this.delete(e))}>Trash</div>
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
    }
    addItem() {
        this.state.listOfItems.push(this.state.textInput)
        this.setState({
            textInput : "",
            listOfItems : this.state.listOfItems
        })
    }
    checkForEnter(e) {
        if (e.keyCode === 13) {
            this.addItem()
        }
    }
    done(e) {
        console.log(e.target.id)
        this.state.listOfDone.push(e.target.textContent)
        this.setState({
            listItems: this.state.listOfItems.splice(e.target.id, 1)
        })
        
    }
    render() {
        console.log(this.state.listOfItems)
        var listItems = this.state.listOfItems.map((item, index) => <li draggable className="to-do-ex" id={index} key={index} onDoubleClick={this.done}>{item}</li>)
        var doneItems = this.state.listOfDone.map((item, index) => <li draggable className="done-ex" key={index}>{item}</li>)
        return (
            <div className="main">
                <div className="to-do">
                    <h1 className="do-title">do</h1>
                    <ul className="to-do-list">
                        <li className="to-do-ex">take out the trash</li>
                        {listItems}
                    </ul>
                </div>
                <div className="input-container">
                    <input value={this.state.textInput} onChange={(e) => this.setState({textInput : e.target.value})} name="do" className="my-input" onKeyUp={this.checkForEnter} type="text" placeholder="take out the trash..."></input>
                </div>
                <div className="done">
                    <h1 className="done-title">ne</h1>
                    <ul className="done-list">
                        <li className="done-ex">take out the dog</li>
                        {doneItems}
                    </ul>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);