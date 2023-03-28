import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';

const title = data.posts.data[0].attributes.title;
const excerpt = data.posts.data[0].attributes.excerpt;
const cover = data.posts.data[0].attributes.cover.data.attributes;
const author = data.posts.data[0].attributes.author.data.attributes.displayName;
const categories = data.posts.data[0].attributes.categories.data[1].attributes.displayName;
const createdAt = data.posts.data[0].attributes.createdAt;

console.log(categories);

export default {
    title,
    excerpt,
    cover,
    author,
    categories,
    createdAt,
} as unknown as ArticleHeaderProps;