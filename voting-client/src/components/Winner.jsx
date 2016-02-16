import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="winner">
                Winner is <b>{this.props.winner}</b>!
            </div>
        );
    }
});