// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div data-testid="planets" className="slick-item">
      <img className="planet-img" src={imageUrl} alt={name} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-des">{description}</p>
    </div>
  )
}

export default PlanetItem
