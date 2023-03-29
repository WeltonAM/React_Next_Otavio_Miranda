import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from '../api/load-posts';

export default function Home() {
  console.log(loadPosts);
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
