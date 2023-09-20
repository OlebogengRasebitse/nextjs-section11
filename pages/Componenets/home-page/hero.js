import Image from 'next/image'; //helps you include images in your website in a way that makes them load faster and look good on all devices, like phones and computers.
import classes from './hero.module.css'

function Hero() {
    return ( 
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                src='/images/site/Olebogeng' alt='an image showing Olebogeng' width={300} 
                height={300}
                />
                  </div>
                <h1> Hi, im Olebogeng</h1>
                <p>
                    I blog about web development & ui/ux design.
                </p>
          
        </section>
     );
}

export default Hero;