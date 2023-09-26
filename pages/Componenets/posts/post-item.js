import Link from "next/link";
import classes from './post-item.module.css'
import Image from "next/image";
import React from "react";

//responsible for rendering a single post item or card
function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
             
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
                    </div> 
                    {/* makes the image resize to fit its container while keeping its shape. */}
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time className={classes.formattedDate}>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
            </Link>
        </li>
    );
}

export default PostItem; 