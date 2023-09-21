import Image from 'next/image';
import classes from "./post-header.module.css";

function PostHeader(props) {
    return ( 
        <header classname={classes.header}> 
            <h1>{props.title}</h1>
            <Image src={Image} alt={props.title} height={150} width={200}/>
        </header>
     );
}

export default PostHeader;