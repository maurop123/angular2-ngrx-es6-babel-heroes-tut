import { Hero } from './hero'

export const HEROES = (function(){
  function newHero(id=null, name=null) {
    return new Hero({
      id: id,
      name: name
    })
  }

  return [
    newHero(10, 'Avatar Mau'),
    newHero(11, 'Mr. Nice'),
    newHero(12, 'Narco'),
    newHero(13, 'Bombasto'),
    newHero(14, 'Celeritas'),
    newHero(15, 'Magenta'),
    newHero(16, 'RubberMan'),
    newHero(17, 'Dynama'),
    newHero(18, 'Dr IQ'),
    newHero(19, 'Magma'),
    newHero(20, 'Tornado')
  ]
})()
