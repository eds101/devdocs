var Constants = require('../constants/constants.js');

var PostBody = React.createClass({

  render: function(){

    if(this.props.type === Constants.EXAMPLE) {
      return (
        <div className="PostBody">
          <pre className="small">{this.props.text}</pre>
        </div>
      );
    } else {
      return (
        <div className="PostBody">
          <p className="small">{this.props.text}</p>
        </div>
      );
    }
  }
});

module.exports = PostBody;