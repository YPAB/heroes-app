import React from 'react'
import { HeroesList } from '../heroe/HeroesList'

export const MarvelScreen = () => {
  return (
    <div>
        <h1> Marvel Screen</h1>

        <HeroesList publisher='Marvel Comics'/>
    </div>
  )
}
