import React from 'react';
import PropTypes from 'prop-types';
export default class TitleBar extends React.Component {
    constructor(props) {
        super(props)
        this.renderSubtitle = this.renderSubtitle.bind(this);
    }
    renderSubtitle(){
        if (this.props.subtitle) {
            return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
        } else {
            return undefined
        }
    }
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubtitle()}
                </div>
            </div>
        )
    }
}
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string

}
// TitleBar.defaultProps = {
//     title: 'Score Keep'
// }