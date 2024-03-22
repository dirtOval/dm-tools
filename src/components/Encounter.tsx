const Encounter = ({order, name}) => {
  return (
    <div className="encounter">
      <span>{order} - {name}</span>
      <button>Edit</button>
      {/* <button>Del</button> */}
    </div>
  )
}

export default Encounter;