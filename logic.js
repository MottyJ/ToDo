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
    }
    render() {
        return (
            <div className="main">
                <input className="my-input" type="text" placeholder="take out the trash..."></input>
                <button className="add">do</button>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);