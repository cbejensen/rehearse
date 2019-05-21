import React from 'react'

export default function ArrangementGrid({ lyrics, sections, sequence }) {
  function buildComposition(section) {
    const composition = sections[section].composition
    return Object.keys(composition).map(key => {
      return `${key}: ${composition[key].desc}`
    })
  }

  const content = sequence.map(key => {
    return (
      <React.Fragment>
        <div>
          {key}
          <pre>
            {lyrics[key]}
          </pre>
        </div>
        <div>
          {buildComposition(key).map((part, i) => <p key={i}>{part}</p>)}
        </div>
      </React.Fragment>
    )
  })

  const styles = {
    wrap: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }
  return (
    <div style={styles.wrap}>
      {content}
    </div>
  )
}