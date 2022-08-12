import { Component } from "react";
import Style from '../../styles/functionalAndClassComponentsStyle/functionalAndClassComponentsStyle.module.css'

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    render() {
        return (
            <div className={Style.componentContainer}>
                <h3>This is a Class component</h3>
                <p className={Style.answer}>{this.props.giveMeSomeProps.propsPassing}</p>
                <p className={Style.answer}>In case of the Class based component we are calling props like so: <b>&#123;this.props.giveMeSomeProps.passedProp&#125;</b></p>
                <p className={Style.passedProps}>{this.props.giveMeSomeProps.passedProp}</p>
                <h3>Lifecycle:</h3>
                <p className={Style.answer}>Updating the state:</p>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <p>Current state: {this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>+</button>
            </div>)
    }
}

export default ClassComponent;