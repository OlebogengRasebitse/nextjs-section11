import AllPosts from "../Componenets/posts/all-posts";


const DUMMY_POSTS = [
    {  slug: 'getting-started-with-nextjs',
         title: 'Getting-Started-With-NextJS', 
    image: 'getting-started-with-nextjs.jpg', 
    excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
     date: '2022-02-10', 
    },
    {  slug: 'getting-started-with-nextjs2',
    title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs.jpg', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
{  slug: 'getting-started-with-nextjs3',
title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs.jpg', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
{  slug: 'getting-started-with-nextjs4',
title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs.jpg', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
];

function AllPostsPage() {
    return ( 
        <AllPosts posts={DUMMY_POSTS} />
     );
}

export default AllPostsPage;