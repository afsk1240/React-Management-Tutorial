import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography : {
        fontFamily : '"Noto Sans KR", serif',
    }
})

ReactDOM.render(<MuiThemeProvider theme={theme}> <App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
/*
function tick() {
    const element = (
        <h3>현재 시각은 [{new Date().toLocaleTimeString()}]
            입니다.
        </h3>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick,1000)*/
/*function Show(props) {
    return (
        <h3>
            Name is {props.name}
        </h3>
    )
}

Show.defaultProps = {
    name: '홍길동'
}

function App() {
    return (
        <main>
            <Show name={"나동빈"}/>
            <Show name={"홍길동"}/>
            <Show name={"이순신"}/>
        </main>
    )

}

// const element = <Show name="나동빈"/>;
const element = <App/>;
ReactDOM.render(element, document.getElementById('root'))*/

/*
function User(props) {
    return (
        <div>
            <img src={props.user.imageURL}/>
            &nbsp;
            <strong>{props.user.name}</strong>
        </div>
    )
}

function Board(props) {
    return (
        <section>
            <User user={props.user}/>
            {props.title}
            <hr/>
            {props.content}
        </section>
    )
}

const board = {
    title: '게시글 제목',
    content: '게시글 내용 반갑습니다.',
    user : {
        name : '나동빈',
        imageURL : 'https://placeimg.com/32/32/any'
    }
}

ReactDOM.render(
    <Board title={board.title}
           content={board.content}
           user={board.user}
    />,
    document.getElementById('root')
)*/

/*


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            date : new Date()
        }
    }

    goBack() {
        let nextDate= this.state.date;
        nextDate.setSeconds(nextDate.getSeconds() -10)
        this.setState({
            date : nextDate
        })
    }

/!*    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }*!/

    render() {
        return (
            <div>
                <h3>현재 시각은 [{this.state.date.toLocaleString()}]
                    입니다.
                </h3>
                <button onClick={this.goBack.bind(this)}>10초 뒤로가기</button>
            </div>
        );
    }


}
ReactDOM.render(<Clock />, document.getElementById('root'));

*/
/*

class ApiExample extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    callApi = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json.title
                })
            })
    }

    componentDidMount() {
        this.callApi()
    }

    render() {
        return (
            <h3>
                {this.state.data? this.state.data : '데이터를 불러오는중'}
            </h3>
        )
    }
}

ReactDOM.render(<ApiExample></ApiExample>,document.getElementById('root'))*/

/*

class EvenetHandling extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn :true
        }

        // this.handleClick = this.handleClick.bind(this) // 2nd 명시적으로 해당 메소드 바인딩
    }
    
    handleClick= ()=> {  // binding 방법 1st : 함수형으로 바꿈
        // console.log('이벤트 처리')
        this.setState (state => ({
            isToggleOn: !this.state.isToggleOn
        }))
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On':'Off'}
            </button>
        );
    }

}

ReactDOM.render(<EvenetHandling/> ,document.getElementById('root'))*/
