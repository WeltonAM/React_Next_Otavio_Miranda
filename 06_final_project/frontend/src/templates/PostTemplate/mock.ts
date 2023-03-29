import { PostTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
    settings: data.setting.data.attributes,
    post: data.posts[0],
} as unknown as PostTemplateProps;