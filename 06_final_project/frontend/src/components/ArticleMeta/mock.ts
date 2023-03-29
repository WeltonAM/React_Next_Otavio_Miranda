import { ArticleMetaProps } from '.';
import { data } from '../../api/data.json';

const createdAt = data.posts.data[0].attributes.createdAt;
const author = data.posts.data[0].attributes.author.data;
const categories = data.posts.data[0].attributes.categories.data;

export default {
    createdAt,
    author: {
        id: author.id,
        slug: author.attributes.slug,
        displayName: author.attributes.displayName,
    },
    categories: [
        {
            id: categories[0].id,
            displayName: categories[0].attributes.displayName,
            slug: categories[0].attributes.slug,
        },
        {
            id: categories[1].id,
            displayName: categories[1].attributes.displayName,
            slug: categories[1].attributes.slug,
        },
    ],
} as ArticleMetaProps;