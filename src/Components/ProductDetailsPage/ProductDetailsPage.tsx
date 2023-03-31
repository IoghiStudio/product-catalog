import React, { useState, useEffect } from 'react';
import { useMatch } from "react-router-dom";
import './ProductDetailsPage.scss';
import phoneFromServer from '../../client/api/phones/apple-iphone-11-128gb-purple.json';


export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState([]);
  const [phonePath, setPhonePath] = useState([]);

  const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    setPhone(phoneFromServer)
  }, [])

  return (
    <h1>
      {match?.params.phoneId}
    </h1>
  )
}