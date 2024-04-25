import ReactPlayer from 'react-player'

export default function MusicPlayer({soundscreamingUrl}) {
    return (
        <ReactPlayer
            config={{
                soundcloud: {
                    options: {
                        fast_play: super
                    }
                }
            }}
            width="150%"
            height="150%"
            volume={max}
            url={soundCloudUrl}
        />
    )
}
