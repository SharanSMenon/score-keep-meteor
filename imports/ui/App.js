import React from 'react';
import PropTypes from 'prop-types'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList'
export default class App extends React.Component {
    render(){
        let players = this.props.players;
        let title = this.props.title;
        let subtitle = "Created by Sharan Sajiv Menon"
        return (
            <div>
                <TitleBar title={title} subtitle={subtitle}/>
                <div className="wrapper">
                    <PlayerList players={players}/>
                    <AddPlayer/>
                </div>
            </div>
        )
    }
}
App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}