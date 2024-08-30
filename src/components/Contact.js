import React from 'react';

function Contact() { // Capitalize the component name to follow React conventions
  const add = [
    {
      Name: 'Ayush Kumar Jha',
      Phoneno: '+91 7783854004', // Added quotes to make it a string
      EmailId: <a>aayushjhasindri2001@gmail.com</a> // Corrected the email address
    }
  ];

  return (
    <div className='contact'>
      {add.map((address, index) => (
        <div key={index}> {/* Adding a key to the mapped elements */}
        <h3>Contact -Me</h3>
          <h3>Name:{address.Name}</h3>
          <h3>Phone no:{address.Phoneno}</h3>
          <h3>EmailId:{address.EmailId}</h3>
        </div>
      ))}
    </div>
  );
}

export default Contact;
