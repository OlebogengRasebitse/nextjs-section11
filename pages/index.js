import { Fragment } from "react";
import Hero from "./Componenets/home-page/hero";
import FeaturedPosts from "./Componenets/home-page/featured-posts";

const DUMMY_POSTS = [
    {  slug: 'getting-started-with-nextjs',
         title: 'Getting-Started-With-NextJS', 
    image: 'getting-started-with-nextjs', 
    excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
     date: '2022-02-10', 
    },
    {  slug: 'getting-started-with-nextjs2',
    title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
{  slug: 'getting-started-with-nextjs3',
title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
{  slug: 'getting-started-with-nextjs4',
title: 'Getting-Started-With-NextJS', 
image: 'getting-started-with-nextjs', 
excerpt: 'NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
date: '2022-02-10', 
},
];


function HomePage() {
    return ( 
        <Fragment> 
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
     );
}

export default HomePage;