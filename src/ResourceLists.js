import React from 'react';
import useResources from './useResources';

const ResourceLists = ({ resource }) => {
  const resources = useResources(resource);
  /*const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };*/

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

  return (
    <ul>
      {resources.map(record => (
        <li>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceLists;
