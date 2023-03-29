import { PostTagsProps } from '.';
import { data } from '../../api/data.json';

export default { tags: data.posts.data } as unknown as PostTagsProps;