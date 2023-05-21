import React, { useState, useEffect } from 'react'

import { Loader, Card, FormField } from "../components"
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost ] = useState(null);

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Human Race Showcase
        </h1>

        <p className="mt-2 text-[#666e75] text-[14px] max-w-[600px]">
          Browse through a imagination people collection in all world generated by DALL-E AI
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ?(
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ): (
          <>
          
          </>
        )} 
      </div>
    </section>
  )
}

export default Home