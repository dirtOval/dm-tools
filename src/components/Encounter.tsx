const Encounter = ({num}) => {
  return (
    <div className="encounter">
      <span>{num} - a dog</span>
      <button>Edit</button>
      <button>Del</button>
    </div>
  )
}

export default Encounter;