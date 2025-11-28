import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"

export default function Detail() {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
  return(
      <div className="detailCard">
        <div className="bg-blue-500/40 px-2.5 rounded-2xl mt-4 text-2xl">
          NO. {String(pokemon.id).padStart(3, '0')}
        </div>
        <div className="cardName">{ pokemon.name }<FavoriteButton pokemonId={Number(pokemonId)}/> </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
        <div className="whitespace-pre-wrap text-center text-[20px]">{ pokemon.description }</div>
      </div>
  )
}