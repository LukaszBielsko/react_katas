import React from 'react'

import BugSimulator from './BugSimulator'
import ErrorBoundry from './ErrorBoundry'

const Bugs = () => {

  return (
    <section>
      <h2>Error Boundries</h2>
      <BugSimulator text='Whole app bug' />
      <ErrorBoundry>
        <BugSimulator text='Single component bug' />
      </ErrorBoundry>
    </section >
  )
}

export default Bugs 
