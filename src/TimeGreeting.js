import React, { useState, useEffect } from 'react'

const TimeGreeting = () => {
  const [hour, setHour] = useState()

  useEffect(() => {
    const date = new Date()
    setHour(date.getHours())
  }, [])


  return (
    <section>
      <p>it's {hour} o'clock</p>
      {
        hour < 12
          ? <p>good morning</p>
          : <p>good not so morning any more</p>
      }
    </section>
  )
}

export default TimeGreeting 
