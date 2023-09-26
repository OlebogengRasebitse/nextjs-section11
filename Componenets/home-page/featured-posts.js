import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

//Purpose is to display a section of featured blog posts on a web page.
function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;


//This code defines a component that represents a section of featured blog posts. It includes a heading and embeds another component (PostsGrid) to render the actual list of posts, passing the necessary data via the props.