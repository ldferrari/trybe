//import { ADDUSUARIO } from './Action'

const INITIALSTATE = {
  usuarios: [], 
}

function reducer(state = INITIALSTATE, action) {
  switch (action.type) {
    case 'ADDUSUARIO':
       return {
         ...state, usuarios: [...state.usuarios, action.usuario]
       }
    default:
      return state;
  }
}

export default reducer;