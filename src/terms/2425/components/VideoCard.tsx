import type { MemoryVideo } from '../data/types'

/** A recap video, played through Google Drive's embedded player. */
export function VideoCard({ video }: { video: MemoryVideo }) {
  return (
    <article className="card video-card">
      <h4 className="video-card__title">{video.title}</h4>
      <div className="video-card__media">
        {/* loading="lazy" waits until the player is near the screen before loading it. */}
        <iframe src={video.embedUrl} title={video.title} loading="lazy" allow="fullscreen" allowFullScreen />
      </div>
    </article>
  )
}
