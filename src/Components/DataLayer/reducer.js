export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //Remove after finished developing!
   //token: "BQCKzc-Go0u3UDqbCK3GsYtbK-OggS5mzQ44N0Ku3srzbREy8K…S2woT8tTNY//LEDAcLKXQhFc2NTe3tSk-0uaESvPJVJkRbu0lVj",

    token: null,
};

const reducer = (state, action)=>{

    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user:action.user,
            }
            case "SET_TOKEN":
                return {
                    ...state,
                    token:action.token,
                }

                case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };

                case "SET_PLAYLIST":
                    return{
                        ...state,
                        playlist: action.playlist_18NpIy7AZcHTAlcIP0tC2f,
                    }
            default: 
            return state;
    }
}

export default reducer;