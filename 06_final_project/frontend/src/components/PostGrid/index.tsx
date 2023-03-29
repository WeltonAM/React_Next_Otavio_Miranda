import { PostCard, PostCardProps } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
    posts?: PostCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
    return (
        <Styled.Wrapper>
            {posts.length === 0 && (
                <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
            )}

            <Styled.Grid>
                {posts.length > 0 &&
                    posts.map((post) => (
                        < PostCard
                            attributes=''
                            id=''
                            key={`post-card-${post.id}`}
                            title={post.attributes.title}
                            cover={post.attributes.cover.data.attributes}
                            excerpt={post.attributes.excerpt}
                            slug={post.attributes.slug}
                        />
                    ))}
            </Styled.Grid>
        </Styled.Wrapper>
    );
};