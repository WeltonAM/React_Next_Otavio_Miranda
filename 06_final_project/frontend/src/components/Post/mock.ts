import { PostProps } from '.';
import { data } from '../../api/data.json';

const title = data.posts.data[0].attributes.title;
const excerpt = data.posts.data[0].attributes.excerpt;
const cover = data.posts.data[0].attributes.cover.data.attributes;
const content = data.posts.data[0].attributes.content;
const author = data.posts.data[0].attributes.author.data.attributes;
const categories = data.posts.data[0].attributes.categories.data;
const createdAt = data.posts.data[0].attributes.createdAt;

export default {
    title,
    excerpt,
    cover,
    content,
    author,
    categories,
    createdAt,
} as unknown as PostProps;