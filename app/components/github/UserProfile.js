var React = require('react');

var Profile = React.createClass({
    render: function() {

        return (
            <div>
                <p> User Profile</p>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>
        )
    }
});

module.exports = Profile;

