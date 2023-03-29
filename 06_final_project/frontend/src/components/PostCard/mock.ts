import { PostCardProps } from '.';
import { data } from '../../api/data.json';

const title = data.posts.data[0].attributes.title;
const cover = data.posts.data[0].attributes.cover.data.attributes;
const excerpt = data.posts.data[0].attributes.excerpt;
const slug = data.posts.data[0].attributes.slug;

export default {
    title,
    excerpt,
    cover,
    slug
} as unknown as PostCardProps;