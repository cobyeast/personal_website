import React, { Fragment, Component } from 'react'
import { Spring, Transition, animated } from 'react-spring/renderprops'
import MetaTags from 'react-meta-tags';

export class Home extends Component {
  render() {
    return (
      <Fragment>
      <MetaTags>
        <title>Coby Eastwood: Home</title>
          <meta id='meta-description' name='description' content='Personal website to highlight my work experience and display my JavaScript, TypeScript, and Python skills along with my experience with frameworks like React.js.' />
          <meta id="og-title" property="og:title" content="Coby Eastwood: Software Developer" />
      </MetaTags>

      <div className="Standout">Home</div>
        <Spring
          from={{ padding: 10, margin: 100 }}
          to={{ padding: 0, margin: 0 }}
          config={{ delay: 500, duration: 500 }}>
          { props => (
            <div style={props}>
            <div className='Intro'>
            <h5><strong>WELCOME TO MY HOMEPAGE</strong></h5>
            <p>If you are looking for some cool JavaScript and Python projects, be sure to take a look at my <a href='/projects'>projects</a> page. I also have an ongoing <a href='/blog'>blog</a>, if you are looking to learn more about specific programming concepts.</p>
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
              <div className='HomePage'>
              <section>
              <h1>About</h1>
              <br/>
              <h5><strong>My Journey</strong></h5>
              <p>In the last two years, I have gone from being a fresh out of college graduate to have gained hands-on experience with over eleven different high-growth technology startups. Over the last year, I have fallen in love with programming and have begun taking on Software Development projects at mid-sized startups like <a href='https://igluu.com/'>Igluu</a>. I began my career working as an associate at Table Public Relations, a small firm located downtown San Francisco and now work as a marketing operations manager at Crosspoint Evaluations.</p>
              <h5><strong>Myself</strong></h5>
              <p>In my free time, I will either be running, reading psychology books, hanging at a coffee shop or munching on some pastries. I am personally interested in running, coding, reading, cryptocurrencies, stocks, fashion, marketing, border collies, and good-mood food.</p>
              </section>
              <section>
              <h1>Work Experience</h1>
              <br/>
              <h5><strong>Igluu</strong></h5>
              <h6>March 2020 - Present // Project-Based Software Developer</h6>
              <p>As a project-based Software Developer, I actively create React components in JavaScript for Igluu's website. In this position, I use version control – Git/GitHub and frameworks/languages like HMTL5, Bootstrap, and SCSS/CSS3. Within my first month, I  created an interactive product landing page where I collaborated with Igluu's Backend Developers, UI, and UX teams.</p>
              <h5><strong>Crosspoint Evaluations</strong></h5>
              <h6>June 2019 - Present // Marketing Operations Manager</h6>
              <p>As Marketing Operations Manager, I lead and enable a team of three sales associates, craft business development campaigns, manage our sales pipeline using Pipedrive, conduct competitive analysis, track key performance indicators, and promote our services through direct marketing channels.</p>
              <p>I have also been learning how to use new tools such as Mailchimp, Google Adwords, Google Analytics, Google Search Console, Yesware, CRM, and refine my skills in SEO, HTML5, CSS3, and email marketing.</p>
              </section>
              <section>
              <h5><strong>Table Public Relations</strong></h5>
              <h6>June 2018 - January 2019 // Associate</h6>
              <p>As an Associate, I worked closely with my account managers, CEOs, and marketing teams of venture-backed technology startups to research, brainstorm, strategize, and construct communication campaigns.</p>
              <p>I learned how to write blogs, pitches, and press releases. I also learned how to conduct keyword analysis, research media trends, and craft communication campaigns, executive profiles, and proposals of work. During this time, I refined my skills in Excel, copywriting, and email marketing.</p>
              </section>
              <section>
              <h5><strong>Pantry Fuel</strong></h5>
              <h6>Septemper 2017 - January 2018 // Growth Marketing Intern</h6>
              <p>As a Growth Marketing Intern, I worked closely with Pantry Fuel's CEO to improve sales and retention rates. In my role, I attended local marketing events, met with small businesses to promote our services, crafted blogs, and ran all social media accounts.</p>
              </section>
              </div>
              </div> 

            </animated.div>
          ))}
        </Transition>
      </Fragment>
    )
  }
}

export default Home
