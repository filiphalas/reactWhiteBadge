import Style from '../../styles/footer/footerComponentStyle.module.css';

const FooterComponent = () => {
    return (
        <div className={Style.footerContainer}>
            <span>This is an app created using "create-react-app" command</span>
        </div>
    )
}

export default FooterComponent;