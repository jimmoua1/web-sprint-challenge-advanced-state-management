//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.

import React from 'react';
import { connect } from "react-redux";

import { smurfData, addNewSmurf, setError,  } from "../actions/index";

class AddForm extends React.Component {
        state = {
            name: "",
            position: "",
            nickname: "",
            description: ""
        }

    handleChange = (e) => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };
    
    render() {
        return <div>
            <h1>New Smurf</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>name</label>
                    <input onChange={this.handleChange} value={this.state.name} />

                    <label>position</label>
                    <input onChange={this.handleChange} value={this.state.position}  />

                    <label>description</label>
                    <input onChange={this.handleChange} value={this.state.description}  />

                    <label>nickName</label>
                    <input onChange={this.handleChange} value={this.state.nickname}  />
                </div>
                <button>submit</button>
            </form>
            </div>;
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, { smurfData, addNewSmurf, setError  })(AddForm);

