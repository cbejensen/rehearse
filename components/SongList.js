import React from 'react'
import Link from 'next/link'
import songs from '../songs'

export default function SongList() {
  const renderedSongs = Object.keys(songs).map(key => (
    <Link as={`/songs/${key}`} href={`/songs?id=${key}`} key={key}>
      <li>{songs[key].title}</li>
    </Link>
  ))
  return (
    <ul>
      {renderedSongs}
    </ul>
  )
}