import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFectch from '../hooks/useFectch';
import './styles/pokeinfo.css'; 

const PokeInfo = () => {

  const params = useParams();

  const [pokemon, getPokemon] = useFectch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
  }, []);

  const obj = {
    width: '45%'
  }

  return (
    <section>
      <figure>
        <img src={pokemon?.sprites.other['official-artwork'].front_defaul} alt="pokemon imagen" />
      </figure>
      <span># {pokemon.id}</span>
      <h2>{pokemon?.name}</h2>
      <ul>
        <li><span>weight</span><span>{pokemon?.weight}</span></li>
        <li><span>height</span><span>{pokemon?.height}</span></li>
      </ul>
      <div>
        <article>
          <h3>type</h3>
          <ul>
            {
              pokemon?.types.map(type => (
                <li key={type.type.url}>{type.type.name}</li>
              ))
            }
          </ul>
        </article>
        <article>
          <h3>skills</h3>
          <ul>
            {
              pokemon?.abilities.map(skill => (
                <li key={skill.ability.url}>{skill.ability.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
      <h2>Stats</h2>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span><div className='stats__bar'><div style={obj} className='stats__prog'></div></div></li>
          ))
        }
      </ul>
      <h2>Movements</h2>
      <ul>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.url}>{move.move.name}</li>
          ))
        }
      </ul>
    </section>
  )
}
export default PokeInfo