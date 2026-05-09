import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
 const {id} = useParams()

 const [profile,setProfile]=useState(null)


  const videos = Array(9).fill({
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  })
  
  useEffect(()=>{
    axios.get('http://localhost:9000/api/food-partner')
  },[])

  return (
    <div className="min-h-screen bg-black text-white">

      {/* 🔝 HEADER */}
      <div className="p-4 border-b border-gray-700">

        {/* Profile Top */}
        <div className="flex items-center gap-4">

          {/* Profile Image */}
          <div className="w-20 h-20 rounded-full bg-gray-400" />

          {/* Business Info */}
          <div>
            <h2 className="text-lg font-semibold">Business Name</h2>
            <p className="text-sm text-gray-400">Address goes here</p>
          </div>

        </div>

        {/* Stats */}
        <div className="flex justify-around mt-4 text-center">

          <div>
            <p className="text-sm text-gray-400">Total Meals</p>
            <p className="font-bold text-lg">43</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Customers</p>
            <p className="font-bold text-lg">15K</p>
          </div>

        </div>

      </div>

      {/* 🎬 VIDEO GRID */}
      <div className="grid grid-cols-3 gap-[2px]">

        {videos.map((item, index) => (
          <div key={index} className="aspect-square bg-gray-900">

            <video
              src={item.video}
              className="w-full h-full object-cover"
              muted
              loop
            />

          </div>
        ))}

      </div>

    </div>
  )
}

export default Profile