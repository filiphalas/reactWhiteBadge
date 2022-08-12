import ClassComponent from '../classBased/ClassComponent';
import FunctionalComponent from '../functionalBased/FunctionalComponent';
import FooterComponent from '../footer/FooterComponent';
import Style from '../../styles/main/mainComponentStyle.module.css'
import { useEffect, useState, useCallback } from 'react';

const MainComponent = () => {
    const interpolationValue = '{value}';
    const message = `${interpolationValue}`;
    const thoseArePropsToBePassed = {
        propsPassing: 'If we want to pass some props to our child component: <ChildComponent propName={objectWeWantToPass} />',
        passedProp: 'This is what we have passed from our parent component'
    }
    const [welcomeText, setWelcomeText] = useState(' ')
    const [showContent, setShowContent] = useState(false);

    const typingSimulator = useCallback(() => {
        const text = 'Hi, my name is Filip Halas and this is my React White Badge application evidence';
        for (let i = 0; i < text.length; i++) {
            const startIndex = 0;
            const endIndex = i + 1;
            setTimeout(() => {
                setWelcomeText(text.substring(startIndex, endIndex));
            }, i * 33);
            setTimeout(() => {
                setShowContent(true);
            }, 3000);
        }
    }, [])

    useEffect(() => {
        typingSimulator();
    }, [typingSimulator])


    return (
        <div>
            <div className={Style.mainContainer}>
                <div className={Style.questionAnswer}>
                    <h3>{welcomeText}</h3>
                </div>
                <div className={showContent ? Style.visibleContent : Style.hiddenContent}>
                    <div className={Style.componentsContainer}>
                        <ClassComponent giveMeSomeProps={thoseArePropsToBePassed} />
                        <FunctionalComponent giveMeSomeProps={thoseArePropsToBePassed} />
                    </div>
                    <div className={Style.questionAnswer}>
                        <h3>What is the difference between HTML and JSX?</h3>
                        <p>HTML (HyperText Markup Language) - standard, widely used, web development
                            language which is being read by the browsers to show the content of the page.</p>
                        <p>JSX (JavaScript XML or JavaScript Syntax Extension) - a syntatic sugar for React.
                            It is an extension of JS that allows developers to write HTML code within the JavaScript.</p>
                        <p>JSX must return one element which will wrap the lower-level content.
                            We can wrap our content in parent using: &#60;div&#62;...&#60;/div&#62;
                            or: &#60;&#62;...&#60;/&#62;</p>
                        <p>HTML elements have attributes and JSX ones have prop. Attributes are all lower-case, props
                            are camelCase that is why we would write onclick in HTML and onClick in JSX. Also there is no class prop in JSX, we can use className instead.</p>
                    </div>
                    <div className={Style.questionAnswer}>
                        <h3>Interpolation</h3>
                        <p>Interpolation in JS is a fancy expresion for inserting values into the strings placeholder.
                            We can do so by first declaring a variable with a value, and then refering to it in the String like so: `${message}`. It is important to use `` not "" or '' for our String declaration with the placeholder if we want to use the interpolation.</p>
                    </div>
                    <div className={Style.questionAnswer}>
                        <h3>Component lifecycle</h3>
                        <p>Components lifecycle is divided in 3 phases: Mounting, Updating and Unmounting</p>
                        <p>Mounting: this phase contains setting up elements into the DOM</p>
                        <p>Updating: updating phase means changing state or props of the component</p>
                        <p>Unmounting: this phase is when the component is being removed from the DOM</p>
                        <p>Depends if we are using hooks and functional component or class based components we can trigger methods during different lifecycle phases of our component.
                            While in class component we can use methods such as
                            componentDidMount, componentDidUpdate, componentWillUnmount etc. Using functional component and hooks - we can use useEffect or some custom hooks</p>
                        <p>Great explanation of the concept: <a href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/' target='_blank' rel='noreferrer'>link</a></p>
                    </div>
                    <div className={Style.questionAnswer}>
                        <h3>What is the React virtual DOM</h3>
                        <p>React virtual DOM is a representation of a DOM object.
                            React is creating an objects that is representing the real DOM (kind of like a blueprint).
                            It has all the properties of a DOM element but becouse it's lightweight it is much more efficient to modify it.
                        </p>
                    </div>
                    <div className={Style.lastQuestionAnswer}>
                        <h3>How Hooks work</h3>
                        <p>Hooks were introduced in React with v16.8. Hooks are accesable only in functional components.
                            Basically hooks are just functions that are allowing us to manipulate React's state and lifecycle features.
                            It is possible to write your own custom hooks. The basic, inbuild hooks, are useState (to update the state), useEffect (to trigger functions) and useContex (to manage the state globally, it allows to pass data through the components without having to pass the props down at every signle level)</p>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default MainComponent;