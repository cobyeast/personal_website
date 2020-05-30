import React, { Component, Fragment } from 'react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import { Transition, animated } from 'react-spring/renderprops'

export default class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Fragment>
        <div className="Standout">Resume</div>
        <Transition
            native
            items={true}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ delay: 50, duration: 50 }}>
            { show => show && (props => (
          <animated.div style ={props}>
            <div className='Resume'>
              <div>
                <Document
                  file='cobyeastwood.pdf'
                  onLoadSuccess={this.onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} className='Page' />
                </Document>
              </div>

              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </animated.div>
            ))}
          </Transition>
      </Fragment>
    )
  }
}