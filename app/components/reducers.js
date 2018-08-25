const initialState = {
    results: [],
    jadwal:[],
    materies:[],
    obats:[],
    pasiens:[]
}
  
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_MENU':
            return {...state, results: action.payload}
        case 'ALL_JADWAL':
        	return {...state, jadwal: action.payload}
        case 'ALL_OBAT':
        	return {...state, obats: action.payload}
        case 'ALL_MATERI':
            return {...state,materies: action.payload}
        case 'ALL_PASIEN':
            return {...state, pasiens: action.payload}
        default:
            return state
    }
}

export default menuReducer