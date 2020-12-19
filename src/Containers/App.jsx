import React from 'react';
import CardList from '../Components/CardList';
import { robots } from '../Components/robots';
import SearchBox from '../Components/SearchBox';
import "./App.css"
import Scroll from "../Components/Scroll";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;