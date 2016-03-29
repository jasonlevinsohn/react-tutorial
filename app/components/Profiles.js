var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers'

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

       this.init(this.props.params.username);

    },
    componentWillUnmount: function() {
       console.log('We unmounted');
    },
    init: function(username) {
       getGithubInfo(username)
           .then(function(data) {

               console.log('The Data: ', data);
               this.setState({
                bio: data.bio,
                repos: data.repos
               });
           }.bind(this));
    },
    componentWillReceiveProps: function(newProps) {
        console.log('New Props: ', newProps);
        this.init(newProps.params.username);
    },
    handleAddNote: function(newNote) {
        // Doesn't save it to firebase and persist, but Firebase was giving
        // me errors so this is the best we can do.
        var newNotes = this.state.notes;
        newNotes.push(newNote);
        newNotes = this.state.notes;
        this.setState({
            notes: newNotes
        });
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
