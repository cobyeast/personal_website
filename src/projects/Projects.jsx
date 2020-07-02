import React, { Fragment } from 'react'
import Cards from '../components/cards.component'
import Contact from '../components/contact.component'
import { Spring, Transition, animated } from 'react-spring/renderprops'
import ProjectsJson from './ProjectsJson.json'
import MetaTags from 'react-meta-tags';

const Projects = () => {
  return (
  <Fragment>
      <MetaTags>
        <title>Coby Eastwood: Projects</title>
          <meta id="meta-description" name="description" content="Explore my front and backend development projects using JavaScript, TypeScript, and Python along with many popular frameworks." />
          <meta id="og-title" property="og:title" content="Coby Eastwood: Projects" />
      </MetaTags>

    <div className="Standout">Projects</div>

    <Spring
          from={{ padding: 10, margin: 100 }}
          to={{ padding: 0, margin: 0 }}
          config={{ delay: 500, duration: 500 }}>
          { props => (
            <div style={props}>
            <div className='Intro'>
            <h5><strong>CHECK OUT THESE PROJECTS</strong></h5>
            <p>Over the past couple of months, I have been tweaking some programming projects using JavaScript, TypeScript, and Python. All of these projects include popular frameworks — feel free to check them out below.</p>
            </div>
            </div> 
          )}
        </Spring>
        <Transition
            native
            items={true}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ delay: 50, duration: 50 }}>
            { show => show && (props => (
            <animated.div style ={props}>

    <div className="App">
    <section>
    <h1>Projects</h1>
      <br/>
      <h5>Description: JavaScript, TypeScript, and Python based projects</h5><p>I have been working on a handful of front and backend development projects that use a combination of different popular frameworks including React, Node, Express, MongoDB, and Flask.</p>
    </section>
    </div>
    <div className="Projects">
      { ProjectsJson.map((project) => {
          return (
            <Cards 
              key={project['ID']}
              url={project['URL']}
              title={project['Title']} 
              desc={project['Desc']} 
              programs={project['Programs']}
              />
          )
        })
      }
    </div>
   
      <Contact />

    </animated.div>
          ))}
        </Transition>

  </Fragment>
  )
}

export default Projects