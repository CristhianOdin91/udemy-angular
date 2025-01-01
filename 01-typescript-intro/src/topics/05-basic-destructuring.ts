
interface AudioPlayer {
    audioVolume: number
    songDuration: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Derby video',
    details: {
        author: 'Infinity',
        year: 2099
    }
}

const song = 'New Song'

const {
    song: anotherSong,
    songDuration: duration,
    details: { author }
} = audioPlayer

console.log(`Song: ${ anotherSong }, Duration: ${ duration }, Author: ${ author }`)

// Desestructuración de arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [,,,trunks = 'Not Found'] = dbz

console.log(`Personaje tres: ${ trunks }`)

export {}
