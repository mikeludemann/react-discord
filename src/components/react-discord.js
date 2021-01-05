import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Discord extends Component {
	render() {
		return (
			<iframe src={"https://discord.com/widget?id=" + this.props.discordID + "&theme=dark"} width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
		);
	}
}

Discord.propTypes = {
	discordID: PropTypes.string.isRequired
}

// ------------------------------------------------------------------------------------

export {
	Discord
}