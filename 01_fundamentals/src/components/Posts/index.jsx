import { PostCard } from "../PostCard"

export const Posts = ({ posts }) => {
    return (
        <div className='posts'>
            {posts && posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
