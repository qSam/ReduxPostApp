import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {

  // Life Cycle function for first time render
  componentWillMount() {
      console.log('This would be a good time to call an action creator');
      this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map( (post) => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={"posts/" + post.id} >
          <span className = "pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
      <div className = "text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add a new post
        </Link>
      </div>
      <h3>Posts</h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

//Elimininate due to refactor

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({fetchPosts}, dispatch);
//}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
