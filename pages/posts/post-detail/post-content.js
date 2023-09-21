import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting-Started-With-NextJS', 
    image: 'getting-started-nextjs.jpg', 
    date: '2022-02-10',
    content: '# This is a first post'
    //We use markdwon= less code
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return ( 
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} /> 
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
            
           
        </article>
     );
}

export default PostContent;