import React from 'react';
import { HashLoader } from 'react-spinners';

export default ({isLoading, color='#123abc'}) => {
  return <HashLoader
    loading={isLoading}
    color={color}
    />
}