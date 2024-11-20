import React from 'react';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
       <div className="container">
         <p className="m-0 text-center">© {year} copyright all right reserved</p>
       </div>
     </footer>
  );
}
