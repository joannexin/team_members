import React from 'react';

const App = (props) => {
  return (
    <div>
      <Wrap>
        {props.children}
      </Wrap>
    </div>
  );
}

export default App;
