// import BlogEntries from '../statics/blogs.json';

// const blogRoutes = Object.keys(BlogEntries).map((section) => {
//   const children = BlogEntries[section].map((child) => ({
//     path: child.id,
//     name: child.id,
//     // eslint-disable-next-line prefer-template
//     component: () => import('../content/' + section + '/courses/' + child.id + 'md'),
//   }));
//   return {
//     path: `/course/${section}`,
//     name: section,
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       {
//         path: '',
//         // eslint-disable-next-line prefer-template
//         component: () => import('../content/' + section + '/home.md'),
//       },
//       {
//         path: `/${section}`,
//         component: () => import('pages/course/CourseHandler.vue'),
//         children,
//       },
//     ],
//   };
// });

const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/course/:section/:course?',
    name: 'course',
    props: true,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/course/CourseHandler.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/course/CourseHome.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
