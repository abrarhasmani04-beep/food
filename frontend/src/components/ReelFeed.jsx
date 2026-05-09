import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Reusable feed for vertical reels
// Props:
// - items: Array of video items { _id, video, description, likeCount, savesCount, commentsCount, comments, foodPartner }
// - onLike: (item) => void | Promise<void>
// - onSave: (item) => void | Promise<void>
// - emptyMessage: string
const ReelFeed = ({ items = [], onLike, onSave, emptyMessage = 'No videos yet.' }) => {
  const videoRefs = useRef(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (!(video instanceof HTMLVideoElement)) return
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => { /* ignore autoplay errors */ })
          } else {
            video.pause()
          }
        })
      },
      { threshold: [0, 0.25, 0.6, 0.9, 1] }
    )

    videoRefs.current.forEach((vid) => observer.observe(vid))
    return () => observer.disconnect()
  }, [items])

  const setVideoRef = (id) => (el) => {
    if (!el) { videoRefs.current.delete(id); return }
    videoRefs.current.set(id, el)
  }

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black">
      {items.length === 0 && (
        <div className="h-screen flex items-center justify-center text-white">
          <p>{emptyMessage}</p>
        </div>
      )}
  
      {items.map((item) => (
        <section
          key={item._id}
          className="relative h-screen w-full snap-start flex items-center justify-center"
        >
          {/* VIDEO */}
          <video
            ref={setVideoRef(item._id)}
            className="h-full w-full object-cover"
            src={item.video}
            muted
            playsInline
            loop
          />
  
          {/* OVERLAY */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-transparent via-transparent to-black/70">
            
            {/* RIGHT SIDE ACTIONS */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 text-white">
              
              <div className="flex flex-col items-center">
                <button onClick={() => onLike(item)}>
                  ❤️
                </button>
                <span>{item.likeCount ?? 0}</span>
              </div>
  
              <div className="flex flex-col items-center">
                <button onClick={() => onSave(item)}>
                  🔖
                </button>
                <span>{item.savesCount ?? 0}</span>
              </div>
  
              <div className="flex flex-col items-center">
                💬
                <span>{item.commentsCount ?? 0}</span>
              </div>
  
            </div>
  
            {/* BOTTOM CONTENT */}
            <div className="text-white">
              <p className="text-sm mb-2">{item.description}</p>
  
              {item.foodPartner && (
                <Link
                  to={"/food-partner/" + item.foodPartner}
                  className="bg-white text-black px-3 py-1 rounded text-xs"
                >
                  Visit store
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  )}

  export default ReelFeed