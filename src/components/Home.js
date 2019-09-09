import React from 'react';
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import NavBar from "./Navbar";
import axios from 'axios';
import {Link } from "react-router-dom";
import Loader from '../loader.gif';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            posts: [],
            error: ''
        }

    }
    componentDidMount() {
        const wordPressSiteUrl = "http://qiqiu.yippee.co.nz";
                this.setState({ loading: true }, () => {
                    
                    axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
                    .then(res => {

                        this.setState({loading:false,posts:res.data});
                    })
                    .catch(error => this.setState({ loading: false, error: error.response.data.message }));

        })  
    }
    render() {
        console.log(this.state.posts.length);
        const {posts,loading,error} = this.state;

        return (

            <div>
                <NavBar />

                { error && <div className="alert alert-danger">{error} </div>}

                {
              
                    posts.length?(
                        <div className="mt-5 post-container">
                           { posts.map( post => (
							<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
								<div className="card-header">
									<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
										{renderHTML( post.title.rendered )}
									</Link>
								</div>
								<div className="card-body">
									<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
								</div>
								<div className="card-footer">
									<Moment fromNow >{post.date}</Moment>
									<Link to={`/post/${post.id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
										Read More...
									</Link>
								</div>
							</div>
						) ) }
                        </div>    

                    ):'' }

                    {loading && <img className="loader" src={Loader} alt="" />}
            </div>

        );
    }
}
export default Home;