import React from 'react';
import NeedSomething from '../Components/NeedSomething';
import Banner from '../Components/Banner';
import RecentTasks from '../Components/RecentTasks';
import SuccessStories from '../Components/SuccessStories';
import PricingPlans from '../Components/PricingPlans';
import FAQ from '../Components/FAQ';
import Hero from '../Components/Hero';

const HomePage = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-900'>
            <Hero></Hero>
            <Banner></Banner>
            <RecentTasks></RecentTasks>
            <NeedSomething></NeedSomething>
            <SuccessStories></SuccessStories>
            <PricingPlans></PricingPlans>
            <FAQ></FAQ>
        </div>
    );
};

export default HomePage;