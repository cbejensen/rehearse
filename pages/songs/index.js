import React, { useState } from 'react'
import Page from '../../layouts/Page'
import { withRouter } from 'next/router'
import songs from '../../songs'
import ArrangementGrid from '../../components/ArrangementGrid';

export default withRouter(props => {
  const song = songs[props.router.query.id]
  if (!song) return null

  const { defaultArrangement, lyrics, title } = song
  const [arrangement, setArrangement] = useState(song.arrangements[defaultArrangement])
  const { sections, sequence } = arrangement || {};
  const arrangementProps = {
    lyrics,
    sections,
    sequence
  }

  return (
    <Page>
      <h1>{title}</h1>
      <ArrangementGrid {...arrangementProps}></ArrangementGrid>
    </Page>
  )
})