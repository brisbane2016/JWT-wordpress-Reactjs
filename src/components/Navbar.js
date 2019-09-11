import React from 'react';
import {NavLink} from 'react-router-dom';
import {history } from '../App';
import loginInformation from '../Login';

class Navbar extends React.Component {
    state ={
        loginstatus:false,
        username:""
    }
    componentDidMount(){

        this.setState({
            loginstatus: !!loginInformation().token,
            username:loginInformation().username
        });
    }
    handlelogout= () =>{
        localStorage.removeItem('token');
        history.push("/");

    }
    handlelogin= () =>{
       
        history.push("/login");

    }
    render() {
    

       

       const {loginstatus,username} = this.state;

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             
                
               <NavLink to="/" className="navbar-brand">
                    Home
                </NavLink>
                   <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to="/dashboard" className="nav-link">DashBoard</NavLink>
                            </li>
                      
                        </ul>   

                        {
                            loginstatus?(
                            <>
                              <label className="mr-sm-3 text-danger">{username}</label>  
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                onClick={this.handlelogout}
                              >Logout</button>
                            </>
                            ):(

                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" 
                                
                                onClick={this.handlelogin}
                                >Login</button>
                            )
                            
                            
                            
                            }
                        
                        
                        
                    </div>
                    
                    
                </nav>



            </>
        );
    }
}


export default Navbar;