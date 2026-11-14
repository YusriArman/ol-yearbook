import { useState } from 'react'
import type { MemoryVideo } from '../data/types'

/** A recap video, or a placeholder until its file has been added to public/. */
export function VideoCard({ video }: { video: MemoryVideo }) {
  const [missing, setMissing] = useState(false)

  return (
    <article className="card video-card">
      <h4 className="video-card__title">{video.title}</h4>
      <div className="video-card__media">
        {missing ? (
          <p className="video-card__placeholder">Video coming soon</p>
        ) : (
          <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
            <source src={video.src} type="video/mp4" onError={() => setMissing(true)} />
          </video>
        )}
      </div>
    </article>
  )
}
