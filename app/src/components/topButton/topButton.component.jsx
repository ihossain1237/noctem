import React, {Component} from 'react';
import CustomButton from "../custom-button/customButton.component";
import './topButton.styles.scss'
class TopButton extends Component {
    state={
        prevScrollPos: window.pageYOffset,
        visible: false,
        animation:null
    };

    handleScroll = () => {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > 100;
        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
    };

    componentDidMount() {
        this.setState({visible:false});
        window.addEventListener("scroll",this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",this.handleScroll)
    }




    render() {
        return (
            <CustomButton key={"12345"} customStyle={`topButton ${this.state.visible? 'topButton-visible' :'topButton-hide'}`}  onClick={()=>window.scrollTo(0,0)}>&#10094; TOP</CustomButton>
        );
    }
}

export default TopButton;