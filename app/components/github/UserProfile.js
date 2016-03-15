var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <p> User Profile</p>
                {this.props.bio.avatar_url && <li className="list-group-item"><img style={{maxWidth: 200 + 'px'}} src={this.props.bio.avatar_url} /></li>}
                {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email} </li>}
            </div>
        )
    }
});

module.exports = UserProfile;

