import Head from 'next/head';
import { Fragment } from 'react'
import PostContent from './post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) { // fetch data before rendering a pag
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false, //"fallback" is a feature used in combination with dynamic routes to handle cases where a specific page for a dynamic route doesn't exist at build time. It allows you to serve a default or loading page when a requested dynamic route doesn't have a corresponding static HTML page.
  };
}

export default PostDetailPage;