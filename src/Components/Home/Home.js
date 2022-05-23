import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactBanner from './ContactBanner';
import ReviewsHome from './ReviewsHome';
import ToolsSection from './ToolsSection';

const Home = () => {
    return (
        <section>
        <Banner></Banner>
        <ToolsSection></ToolsSection>
        <BusinessSummary></BusinessSummary>
        <ReviewsHome></ReviewsHome>
        <ContactBanner></ContactBanner>

        </section>
    );
};
export default Home;