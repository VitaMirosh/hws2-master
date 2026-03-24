const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: actionType): typeof initState=> { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
          return {
              ...state,
            themeId:action.id
          }
        }

        default:
            return state
    }
}
type actionType ={
  type: 'SET_THEME_ID'
  id: number
}

export const changeThemeId = (id: number): actionType => ({ type: 'SET_THEME_ID' , id }) // fix any

