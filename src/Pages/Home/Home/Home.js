import React from 'react'
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Products from '../../../Shared/Products/Products';
import TeamSection from '../TeamSection/TeamSection';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

function Home() {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <TeamSection></TeamSection>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    )
}

export default Home;
