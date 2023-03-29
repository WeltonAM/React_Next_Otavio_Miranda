import Link from 'next/link';
import { PostTag } from '../../shared-types/tag';
import * as Styled from './styles';

export type PostTagsProps = {
    tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
    if (tags.length === 0) {
        return null;
    }

    const onlyTags = tags.filter((tag) => {
        console.log(tag)
    })

    return (
        <Styled.Wrapper>
            tags:
            {tags.map((tag) => {
                return (
                    <span key={tag.id}>
                        <Link href={`/tag/${tag.id}`}>
                            {tag.id}
                        </Link>
                    </span>
                );
            })}
        </Styled.Wrapper>
    );
};