import { useState, useEffect, useCallback } from 'react';
import { loadPosts } from '../../utils/load-posts';
import './HomeStyles.css';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button/Button';
import { InputSearch } from '../../components/InputSearch/InputSearch';

export const HomeHooks = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback (async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const filteredPosts = !!searchValue ? (
    posts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
  ) : posts;


  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value)
  }

  const noMorePosts = page + postsPerPage >= allPosts.length;

  return (
    <section className='container'>

      {!!searchValue && (
        <h2>Search: {searchValue}</h2>
      )}

      <InputSearch
        type="search"
        handleChange={handleChange}
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
          loadMorePosts={loadMorePosts}
        />
      )}

    </section>
  )
}
