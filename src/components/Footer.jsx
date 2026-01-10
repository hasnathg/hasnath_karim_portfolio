import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-base-200">
      <div className="container mx-auto px-4 py-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} MD Hasnath Karim — Built with React Router, Tailwind & DaisyUI
      </div>
    </footer>
    );
};

export default Footer;