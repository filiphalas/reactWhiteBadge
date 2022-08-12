import { useState } from 'react';
import Style from '../../styles/functionalAndClassComponentsStyle/functionalAndClassComponentsStyle.module.css'

const FunctionalComponent = ({ giveMeSomeProps }) => {
    const [counter, setCounter] = useState(0);

    return (<div className={Style.componentContainer}>
        <h3>This is a Functional component</h3>
        <p className={Style.answer}>{giveMeSomeProps.propsPassing}</p>
        <p className={Style.answer}>In case of the Class based component we are calling props like so: <b>&#123;giveMeSomeProps.passedProp&#125;</b></p>
        <p className={Style.passedProps}>{giveMeSomeProps.passedProp}</p>
        <h3>Lifecycle:</h3>
        <p className={Style.answer}>Updating the state:</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>Current state: {counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>)
}

export default FunctionalComponent;