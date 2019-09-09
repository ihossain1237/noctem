// import React from "react";
// import {signIn, signOut} from "../../redux/signIn/signIn-actions";
// import {connect} from "react-redux";
//
// class GoogleAuth extends React.Component {
//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client
//                 .init({
//                     clientId: "796149431992-909cpjf9m9jhiapifnhneeoip4p5lahq.apps.googleusercontent.com",
//                     scope: 'email'
//                 })
//                 .then(() => {
//                     this.signIn = window.gapi.auth2.getAuthInstance();
//                     this.onAuthChange(this.signIn.isSignedIn.get());
//                     this.signIn.isSignedIn.listen(this.onAuthChange);
//                 })
//         })
//     }
//
//     onAuthChange = isSignedIn => {
//         if (isSignedIn) {
//             this.props.signIn(this.signIn.currentUser.get().getId());
//         } else {
//             this.props.signOut();
//         }
//     };
//
//     onSignInClick = () => {
//         this.signIn.signIn();
//     };
//
//     onSignOutClick = () => {
//         this.signIn.signOut();
//     };
//
//     renderAuthButton() {
//         if (this.props.isSignedIn === null) {
//             return null;
//         } else if (this.props.isSignedIn) {
//             return (
//                 <button onClick={this.onSignOutClick} className="ui red google button">
//                     <i className="google icon"/>
//                     Sign Out
//                 </button>
//             );
//         } else {
//             return (
//                 <button onClick={this.onSignInClick} className="ui red google button">
//                     <i className="google icon"/>
//                     Sign In with Google
//                 </button>
//             );
//         }
//     }
//
//     render() {
//         return <div>{this.renderAuthButton()}</div>;
//     }
// }
//
// const mapStateToProps = state => {
//     return {isSignedIn: state.signIn.isSignedIn};
// };
//
// export default connect(
//     mapStateToProps,
//     {signIn, signOut}
// )(GoogleAuth);