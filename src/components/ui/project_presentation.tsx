import React from 'react';

const ProjectPresentation = () => {
  return (
    <div className="container mx-auto mt-8 p-4 max-w-[900px]">
      <p className="text-gray-700 mb-4">
        Welcome to Green Venture Classifier, a project developed by Rafael Rahal and Marcelo Dias. We've trained a machine learning model using Natural Language Processing (NLP) to analyze textual descriptions and determine if a venture is environmentally friendly or not.
      </p>
      <p className="text-gray-700 mb-4">
        Investors seeking green companies, job seekers interested in environmentally conscious workplaces, and curious users can interact with our model. Use the form below to input a textual description, and our model will provide an assessment. Additionally, explore visualizations derived from our training data to gain insights into the characteristics of green ventures.
      </p>
    </div>
  );
};

export default ProjectPresentation;