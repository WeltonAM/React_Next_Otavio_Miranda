import './ButtonStyles.css';

export const Button = ({ text, loadMorePosts, disabled }) => {
    return (
        <button onClick={loadMorePosts} disabled={disabled}>
            {text}
        </button>
    )
}
