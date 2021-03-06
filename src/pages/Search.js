import React from 'react'
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';
import Listing from '../components/Listing';

export default function Serach() {
  const listings = [<Listing />]

  return (
    <div>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </div>
  )
}
