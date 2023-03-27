import React from 'react';
import useFetch from './useFetch';

export default function App() {
 const [data]=useFetch(2)


  return (
    <div>
      <h1>App</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
     </div>
  );
}


