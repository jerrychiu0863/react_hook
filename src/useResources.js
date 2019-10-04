import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  //Run the function  only when the value
  //in the array changes
  useEffect(() => {
    //fetchResource(resource);
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
