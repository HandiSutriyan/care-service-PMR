const initialState = {
    results: [],
    jadwal:[],
    infos:[],
    materies:[],
    obats:[],
    pasiens:[],
    isLoading:false,
    isError:false
}
  
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_MENU':
            return {...state, results: action.payload}
        case 'ALL_JADWAL_PENDING':
            return {...state,isLoading:false}
        case 'ALL_JADWAL_FULFILLED':
            return{...state,isLoading:true,jadwal: action.payload.data.data}
        case 'ALL_JADWAL_REJECTED':
            return{...state,isError:true,jadwal: action.payload.data.data}
        case 'ALL_INFO_PENDING':
            return {...state,isLoading:false}
        case 'ALL_INFO_FULFILLED':
            return{...state,isLoading:true,infos: action.payload.data.data}
        case 'ALL_INFO_REJECTED':
            return{...state,isError:true,infos: action.payload.data.data}
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