import React from 'react';
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.userName);
    }


    render() {
      
        return (
            
            <>
                <Navbar />
                <div className="jumbotron" style={{ height: '100vh' }}>
                    <h4>Welcome {this.props.match.params.userName && this.props.match.params.userName}!!</h4>
                    <CreatePost/> 
                </div>


            </>

           
        )
    }
}

export default Dashboard;