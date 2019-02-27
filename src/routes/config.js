import Abstract from './abstract/Index';
import New from './manageArticle/New';
import Draft from './manageArticle/Draft';
import Published from './manageArticle/Published';
import Trash from './manageArticle/Trash';

export default [
    {
        title: '后台简介',
        key: 'abstract',
        path: '/abstract',
        component: Abstract,
    },
    {
        title: '文章管理',
        key: 'manageArticle',
        children: [
            {
                title: '新建文章',
                key: 'new',
                path: '/manageArticle/new',
                component: New,
            },
            {
                title: '已传文章',
                key: 'published',
                path: '/manageArticle/published',
                component: Published
            },
            {
                title: '草稿箱',
                key: 'draft',
                path: '/manageArticle/draft',
                component: Draft
            },
            {
                title: '垃圾箱',
                key: 'trash',
                path: '/manageArticle/trash',
                component: Trash,
            },
        ],
    },
];