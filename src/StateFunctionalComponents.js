import React, { useState, useEffect } from 'react'

const StateFunctionalComponents = () => {

  const [triggerEffectProp, setTriggerEffectProp] = useState()
  const [dontTriggerEffect, setDontTriggerEffect] = useState()
  const [isChildUnmonted, setIsChildUnmounted] = useState(false)


  return (
    <section>
      <h2>State in function components</h2>
      <button onClick={() => setTriggerEffectProp({})} > Click here for child component useEffect trigger</button>
      <button onClick={() => setDontTriggerEffect({})} > Click here for child component useEffect NOT trrigger</button>
      <button onClick={() => setIsChildUnmounted(true)} > Click for child unmount</button>
      {!isChildUnmonted &&
        <Child triggerMe={triggerEffectProp} />
      }
    </section>
  )
}

export default StateFunctionalComponents


function Child(props) {
  const [state, setState] = useState()

  const { triggerMe } = props

  useEffect(() => {
    alert('i will run only once')
    return () => {
      alert('bye')
    }
  }, [])

  useEffect(() => {
    alert('i will run once then only when relevant props change')
  }, [triggerMe])

  useEffect(() => {
    alert('i am annoying, i will run when any state/prop changes')
  })

  return (
    <div>
      <p>hello child :)</p>
      <button onClick={() => setState({})}>change state</button>
    </div>
  )
}


