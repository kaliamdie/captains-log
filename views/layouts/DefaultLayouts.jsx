import React from 'react';

function DefaultLayouts(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/show.css" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

export default DefaultLayouts;
