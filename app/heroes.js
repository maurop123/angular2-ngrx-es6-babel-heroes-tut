import { HEROES } from './mock-heroes'
// import { Hero } from './hero'

export const heroes = (state=HEROES, action) => {
  switch(action.type) {
    case 'ADD_HERO':
      let lastId = state.reduce((prevId, curr) => {
        return (prevId > curr.id) ? prevId : curr.id
      }, 0)
      
      let newHero = action.payload
        newHero.id = lastId+1

        return [...state, newHero]
    default:
        return state
  }
}
