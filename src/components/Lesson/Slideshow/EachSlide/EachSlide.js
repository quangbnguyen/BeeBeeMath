import React from 'react';

class EachSlide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="each-slide">
                <div>
                    <img src={this.props.url} style={{width: '70%', marginTop: '30px', height: '500px'}}/>
                </div>
            </div>
        )
    }
}

export default EachSlide;
