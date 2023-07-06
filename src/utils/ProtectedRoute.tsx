import React from 'react'
import {Navigate} from 'react-router-dom'
import { Props } from '../types/types';




export const ProtectedRoute= ({
    user,
    redirectPath = '/products',
    children
  }) => {
    if (!user) {
      return <Navigate to={redirectPath}  replace />
    }
  
    return children;
  };