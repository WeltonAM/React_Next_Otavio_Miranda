import { MenuProps } from '.';
import { data } from '../../api/data.json';

const links = data.setting.data.attributes.menuLink;
const blogName = data.setting.data.attributes.blogName
const logo = data.setting.data.attributes.logo.data.attributes.url;

export default {
    links,
    blogName,
    logo,
} as MenuProps;