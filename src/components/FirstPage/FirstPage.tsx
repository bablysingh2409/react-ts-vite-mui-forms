import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();

  const redirectToSecondPage = () => {
    // Redirect logic
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      // If user data is present, navigate to the second page
      navigate('/secondpage');
    
    } else {
      // If user data is not present, display a message or handle as needed
      alert('Please enter your details before accessing the second page.');
    }
  };

  return (
    <div>
      <h1>Welcome to the First Page!</h1>
      <UserForm />
      <button onClick={redirectToSecondPage}>Go to Second Page</button>
    </div>
  );
};

export default FirstPage;

