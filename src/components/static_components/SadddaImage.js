import React from 'react';

const style = {
    "marginBottom" : "-50px",
    "width" : "15%"
}

const Image = ()=>(
    <div className="container logo-container">
		<img className="img-fluid float-left" style={style} src="./assets/images/brand/400.png" id="logo"/>
	</div>
)

export default Image;