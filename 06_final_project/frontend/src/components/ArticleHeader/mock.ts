import { ArticleHeaderProps } from '.';
import { data } from '../../api/dados.json';

const { title, excerpt, cover, author, categories, created_at } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  author,
  categories,
  created_at,
} as ArticleHeaderProps;
