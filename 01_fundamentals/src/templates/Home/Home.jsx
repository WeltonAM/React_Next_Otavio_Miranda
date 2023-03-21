import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import './HomeStyles.css';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button/Button';
import { InputSearch } from '../../components/InputSearch/InputSearch';

export class Home extends Component {
  state = {
    name: 'Juliana',
    like: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: '',
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
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value })

  }

  render() {
    const { name, like, posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? (
      posts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      })
    ) : posts;

    return (
      <section className='container'>
        <h1 onClick={this.handleClick}>{name}, {like}</h1>
        <a href='/#' onClick={this.handleAClick}>Link</a>
        <br />
        <br />

        {!!searchValue && (
          <h2>Search: {searchValue}</h2>
        )}

        <InputSearch
          type="search"
          handleChange={this.handleChange}
          searchValue={searchValue}
          placeholder="Search..."
        />

        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p>Post not found</p>
        )}

        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text='See more'
            loadMorePosts={this.loadMorePosts}
          />
        )}

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
