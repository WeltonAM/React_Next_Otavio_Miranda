import { HeaderProps } from '.';
import { data } from '../../api/data.json';

const blogName = data.setting.data.attributes.blogName;
const blogDescription = data.setting.data.attributes.blogDescription;
const logo = data.setting.data.attributes.logo.data.attributes.url;

export default {
    blogName,
    blogDescription,
    logo,
    showText: true,
} as HeaderProps;