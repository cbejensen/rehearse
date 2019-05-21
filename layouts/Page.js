import React from 'react'

export default function Page({ children }) {
  return (
    <div>
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
        }
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }

        body {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        header {
          padding: 1rem;
          border-bottom: 1px solid black;
        }
        main {
          flex: 1;
        }
      `}</style>
      <header>REHEARSE</header>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}