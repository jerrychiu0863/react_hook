import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceLists = ({ resource }) => {
  const [resources, setResources] = useState([]);

  //Run the function  only when the value 
  //in the array changes
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  //Make another request
  /*async componentDidUpdate(prevProps) {
    //Set logic to make a request when only props change
    if(prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resource: response.data });
    }
  }*/

  return <div>{resources.length}</div>;
};

export default ResourceLists;
