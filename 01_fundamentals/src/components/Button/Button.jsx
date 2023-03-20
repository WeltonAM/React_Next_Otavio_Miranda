export const Button = ({ text, loadMorePosts }) => {
    return (
        <button onClick={loadMorePosts}>
            {text}
        </button>
    )
}
