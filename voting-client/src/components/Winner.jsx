import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return (
            <div className="winner">
                Winner is <b>{this.props.winner}</b>!
            </div>
        );
    }
});