import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
    <div className="text-left space-y-4">
      <div>
        <h4 className="font-semibold">How do I post a task?</h4>
        <p className="text-gray-600 dark:text-gray-400">Simply register, go to "Add Task", fill out the form, and post. It takes less than 2 minutes.</p>
      </div>
      <div>
        <h4 className="font-semibold">How are freelancers vetted?</h4>
        <p className="text-gray-600 dark:text-gray-400">We manually review user reports and ratings. Our platform also highlights top performers.</p>
      </div>
      <div>
        <h4 className="font-semibold">Is there a fee?</h4>
        <p className="text-gray-600 dark:text-gray-400">Basic task posting is free. We offer premium visibility and features in Pro plans.</p>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default FAQ;