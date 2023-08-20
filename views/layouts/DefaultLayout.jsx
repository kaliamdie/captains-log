// DefaultLayout.jsx
import React from 'react';

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

export default DefaultLayout;


/*

<DefaultLayout>
    <Show />
</DefaultLayout>

*/