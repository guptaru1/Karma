import React from 'react';
import './AboutUsSection.css'; // Import the CSS file for styles
import EnvelopeLetter from './envelope';

const AboutUsSection = () => {
    return (
        <section className="about-us">
            <div className="container">
                <img src="/images/archana.png" alt="Corner Shop" className="shop-image" />
                <div className="text-content">
                    <h1>Our Philosphy</h1>

                    <p> Eat good. Do good. Feel good.
                        This all started with my mom who loves sugar. She gave me a challenge if I can successfully convert 100 people into
                        giving up sugar, she will do it too. This is for you mom. 
                        <br/>
                        What is life without sweets anyways?
                        <br/>
                        But what if I want to have sweets everyday. Added sugar notoriously seeks into various sauces, drinks and food items.
                        Diabetes was known to be the 8th leading cause of death in 2021, not to get too morbid, which is why we have made a promise
                        to ourselves to create products which contain no added sugar.
                        <br/>
                        Let's embark on a journey of back to our roots with us.

                        <br/>

                        <EnvelopeLetter />
                    </p>
                    <br/>
                        
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;