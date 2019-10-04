import React, { useState } from 'react';
import './App.css';

import ResourceLists from './ResourceLists';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div className="App">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceLists resource={resource} />
    </div>
  );
};

export default App;
