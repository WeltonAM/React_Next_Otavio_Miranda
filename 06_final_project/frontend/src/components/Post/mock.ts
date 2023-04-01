import { PostProps } from '.';
import { data } from '../../api/dados.json';

const { title, excerpt, cover, content, author, categories, created_at } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  created_at,
} as PostProps;
