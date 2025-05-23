import React from 'react';
import NeedSomething from '../Components/NeedSomething';
import Banner from '../Components/Banner';
import RecentTasks from '../Components/RecentTasks';
import SuccessStories from '../Components/SuccessStories';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentTasks></RecentTasks>
            <NeedSomething></NeedSomething>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default HomePage;