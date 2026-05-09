import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/food",
          { withCredentials: true }
        )

        console.log("API Response:", response.data)

        // safer fallback
        setVideos(response.data.foodItems || [])
      } catch (error) {
        console.error("Error fetching videos:", error)
      }
    }

    fetchVideos()
  }, [])

  async function likeVideo(item) {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/food/like",
        { foodId: item._id },
        { withCredentials: true }
      )

      if (response.data.like) {
        setVideos(prev =>
          prev.map(v =>
            v._id === item._id
              ? { ...v, likeCount: (v.likeCount || 0) + 1 }
              : v
          )
        )
      } else {
        setVideos(prev =>
          prev.map(v =>
            v._id === item._id
              ? { ...v, likeCount: (v.likeCount || 0) - 1 }
              : v
          )
        )
      }
    } catch (err) {
      console.error("Like error:", err)
    }
  }

  async function saveVideo(item) {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/food/save",
        { foodId: item._id },
        { withCredentials: true }
      )

      if (response.data.save) {
        setVideos(prev =>
          prev.map(v =>
            v._id === item._id
              ? { ...v, savesCount: (v.savesCount || 0) + 1 }
              : v
          )
        )
      } else {
        setVideos(prev =>
          prev.map(v =>
            v._id === item._id
              ? { ...v, savesCount: (v.savesCount || 0) - 1 }
              : v
          )
        )
      }
    } catch (err) {
      console.error("Save error:", err)
    }
  }

  return (
    <div className="h-screen w-full bg-black">
      <ReelFeed
        items={videos}
        onLike={likeVideo}
        onSave={saveVideo}
        emptyMessage="No videos available."
      />
    </div>
  )
}

export default Home