import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts(prop) {
    return ( 
        <section className={classes.latest}> 
        <h2>Featured Posts</h2> 
        <PostsGrid posts={prop.posts}/>
        </section>
     );
}

export default FeaturedPosts;