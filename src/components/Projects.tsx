import React from 'react'

const sampleProjects = [
  {
    title: 'Project A',
    description: 'A brief description of project A showcasing skills and tech used.',
    url: '#'
  },
  {
    title: 'Project B',
    description: 'A brief description of project B showcasing skills and tech used.',
    url: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Selected projects</h2>
      <div className="grid">
        {sampleProjects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a className="link" href={p.url}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
