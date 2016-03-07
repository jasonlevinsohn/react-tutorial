var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
    mixins: [],
    getInitialState: function() {
        return {
            notes: [
                'Get two farm gates',
                'Build new door for chicken coop',
                'Put down grass seed',
                'Pick up sticks ;)'
            ],
            bio: {
                name: 'Jason Levinsohn'
            },
            repos: ['a', 'b', 'c']
        }
    },
    // Put all ajax requests and listeners here.
    componentDidMount: function() {
       console.log('We mounted');
    },
    componentWillUnmount: function() {
       console.log('We unmounted');
    },
    handleAddNote: function(newNote) {
        console.log('New Notes are awesome: ', newNote);
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes} 
                        addNote={this.handleAddNote} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;
