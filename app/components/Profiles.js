import React from 'react';
import Repos from './github/Repos';
import UserProfile from './github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://jlev-fire-app.firebaseio.com/');

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
            ],
            bio: {
                name: 'Jason Levinsohn'
            },
            repos: ['a', 'b', 'c']
        }
    
    }

    // Put all ajax requests and listeners here.
    componentDidMount() {
       console.log('We mounted');

       this.init(this.props.params.username);

    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    init(username) {

       this.ref = base.bindToState(username, {
           context: this,
           asArray: true,
           state: 'notes'
       });

       getGithubInfo(username)
           .then(function(data) {

               console.log('The Data: ', data);
               this.setState({
                bio: data.bio,
                repos: data.repos
               });
           }.bind(this));
    }
    componentWillReceiveProps(newProps) {
        base.removeBinding(this.ref);
        this.init(newProps.params.username);
    }
    handleAddNote(newNote) {
        base.post(this.props.params.username, {
            data: this.state.notes.concat([newNote])
        });
    }
    render() {
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
                        addNote={(newNote) => this.handleAddNote(newNote)} />
                </div>
            </div>
        )
    }
}

export default Profile;
