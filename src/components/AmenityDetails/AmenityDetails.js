import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import faker from "faker";

import Reviews from "../Reviews/Reviews";
import ReturnHome from '../ReturnHome/ReturnHome';

import {getAmenityDetails} from '../../services/google-api'

import "./AmenityDetails.css";

export default function AmenityDetails() {
  const [amenityDetails, setAmenityDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAmenityDetails(id)
    .then(res => {
      console.log(res.data.result)
      setAmenityDetails(res.data.result)
      setReviews(res.data.result.reviews)
    })
  }, [id]);

  let amenityDetailsPage = amenityDetails ? (

    <div className="AmenityDetails">
      <h1>{amenityDetails.name}</h1>
      <img alt="" src={faker.image.business()}></img>
      <h2>{amenityDetails.formatted_address}</h2>
      <h2>{amenityDetails.formatted_phone_number}</h2>
      <Reviews reviews={reviews}/>
    </div>
  )
  :
  (
    <>
      <ReturnHome />
    </>
  )
    return (
      <>
      {amenityDetailsPage}
      </>
  );
}
