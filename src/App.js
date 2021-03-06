import React from 'react';
import './App.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: true,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}> My Settings </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Create Page">Create Page</a></li>
         <li><a href="#Manage Pages">Manage Pages</a></li>
         <li><a href="#Create Ads">Create Ads</a></li>
         <li><a href="#Manage Ads">Manage Ads</a></li>
         <li><a href="#Activity Logs">Activity Logs</a></li>
         <li><a href="#Setting">Setting</a></li>
         <li><a href = "#Login">Login Page</a></li>
         <li><a href="#Log Out">Log Out</a></li>
        </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;

/*import React from 'react';

class App extends React.Component{
  render(){
    const Greeting = <h1>Hello world!</h1>
     return(
      <div></div>
     )

  }
}*/