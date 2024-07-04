import React from 'react';
import LoveButton from '../components/Button';
import '../globals.css';
import Background from '../components/Background';

const InvitationPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Background />

      <div className="w-[500px] h-[500px] ">
        <LoveButton></LoveButton>
      </div>
    </div>
  );
};

export default InvitationPage;
