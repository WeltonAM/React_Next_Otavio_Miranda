import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import './HomeStyles.css';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button/Button';

export class Home extends Component {
  state = {
    name: 'Juliana',
    like: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  handleClick = () => {
    this.setState({ name: 'Karla' });
  }

  handleAClick = (e) => {
    e.preventDefault();
    this.setState({ like: +1 });
    if (this.state.like === 1) {
      console.log(this.state.like);
      this.setState({ like: 0 });
    }
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {

  }

  render() {
    const { name, like, posts } = this.state;

    return (
      <section className='container'>
        <h1 onClick={this.handleClick}>{name}, {like}</h1>
        <a href='/#' onClick={this.handleAClick}>Link</a>
        <Posts posts={posts} />
        <Button
          text='See more' 
          loadMorePosts={this.loadMorePosts} 
        />
      </section>
    )
  }
}

// function Home() {
//   return (
//     <div className="Home">
//     </div>
//   );
// }
