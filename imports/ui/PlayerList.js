import React from 'react';
import Player from './Player'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move';
// import { Players } from './../api/players'
// const renderPlayers = (playersList) => playersList.map((player) => (
//     <Player key={player._id} player={player}/>
//   ))
export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Please add your first player to get started</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            })
        }

    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}
PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}