import { PostGridProps } from '.';
import { data } from '../../api/data.json';

export default { posts: data.posts.data } as unknown as PostGridProps;