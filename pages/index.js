import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from './Componenets/home-page/featured-posts';
import Hero from './Componenets/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() { //getStaticProps() is a special function in Next.js used to fetch data before rendering a page
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts, // We're passing the list of featured posts to our component
    }
    }
  };


export default HomePage;