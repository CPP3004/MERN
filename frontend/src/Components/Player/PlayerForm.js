import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    // Create refs for each input field in the constructor
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();

        // Bind the submitPlayer method
        this.submitPlayer = this.submitPlayer.bind(this);
    }

    submitPlayer(event) {
        console.log(`The PROPS: ${this.props}`);  // This will show all the props passed to PlayerForm

        event.preventDefault();

        // Use refs to get the input field values
        const firstName = this.firstNameRef.current.value;
        const lastName = this.lastNameRef.current.value;
        const phone = this.phoneRef.current.value;
        const email = this.emailRef.current.value;

        // Send the data to the backend via Axios
        axios.post('http://localhost:4000/players', {
            firstName,
            lastName,
            phone,
            email,
        })
        .then((response) => {
            console.log(response);
            // Once a player is successfully added, update the players list in App.js
            // if (this.props.updatePlayers) {
            //     this.props.updatePlayers(response.data); // Safe check
            // } else {
            //     console.log("updatePlayers function is not passed correctly.");
            // }
            window.location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="row">
                <h1 className="center">Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="firstName"
                                type="text"
                                ref={this.firstNameRef} // Using refs to capture input values
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="lastName"
                                type="text"
                                ref={this.lastNameRef} // Using refs to capture input values
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="phone"
                                type="text"
                                ref={this.phoneRef} // Using refs to capture input values
                            />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="email"
                                type="text"
                                ref={this.emailRef} // Using refs to capture input values
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">
                        Add player
                    </button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;

