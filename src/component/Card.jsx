import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton"

const CardContainer = styled.section`
  background: radial-gradient(circle at 50% 40%, #dbedba -30%, rgba(252, 252, 252, 0) 40%);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  width: 250px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 500;
  color: #282935;
  letter-spacing: 2px;
`
export const Card = ({pokemon}) => {
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <div className="bg-blue-500/40 px-2.5 rounded-2xl mt-3">
        NO. {String(pokemon.id).padStart(3, '0')}
      </div>
      <img className="w-[200px]" src={pokemon.front}/>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  )
}