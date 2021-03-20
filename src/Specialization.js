const GenericMessage = (props) => {

  return (
    <>
      <h1>{props.messageType}</h1>
      <h2>{props.name}</h2>
      <h3>{props.message}</h3>
    </>
  )
}

const FiredMessage = () => (
  <GenericMessage
    messageType='Bad News'
    name='Maciek'
    message='You are fired!'
  />
)

const PromotionMessage = () => (
  <GenericMessage
    messageType='Good News'
    name='Józek'
    message="You have been promoted"
  />
)

const NeutralMessage = () => (
  <GenericMessage
    messageType='Eeee News'
    name='Bartek'
    message='Hey, you!'
  />
)
const Specialization = () => (
  <section>
    <FiredMessage />
    <hr />
    <PromotionMessage />
    <hr />
    <NeutralMessage />
  </section >
)

export default Specialization

