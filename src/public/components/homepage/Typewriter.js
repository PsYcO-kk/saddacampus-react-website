import React from 'react';
import Typed from 'typed.js';

export default class Typewriter extends React.Component {
	componentDidMount() {
		const options = {
			strings: this.props.strings,
			typeSpeed: this.props.typeSpeed,
			backSpeed: this.props.backSpeed,
			loop: true,
			loopCount: Infinity
		};
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		this.typed.destroy();
	}

	render() {
		return (
			<span className="wrap type-wrap" style={{ whiteSpace: 'pre', color: `${this.props.color}` }} ref={(el) => { this.el = el; }}></span>
		);
	}
}
