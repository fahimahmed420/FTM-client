import React from 'react';
import NeedSomething from '../Components/NeedSomething';
import Banner from '../Components/Banner';
import RecentTasks from '../Components/RecentTasks';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentTasks></RecentTasks>
            <NeedSomething></NeedSomething>
        </div>
    );
};

export default HomePage;