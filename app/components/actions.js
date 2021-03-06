import axios from 'axios'

export function allJadwal(){
	return {
		type: 'ALL_JADWAL',
		payload : axios.get('https://pmrwirastemsagoorg.000webhostapp.com/api/kegiatan.php')
	}
}
export function allInfo(){
    return{
        type: 'ALL_INFO',
        payload: axios.get('https://pmrwirastemsagoorg.000webhostapp.com/api/info.php')
    }
}
export function allMateri(){
    const materi=[
        {name:'Materi Kepalangmerahan',url:'https://drive.google.com/file/d/1pRiOYzh-G185_QD6VRfe2VXQ-pyBJ2o4/view'},
        {name:'Pertolongan Pertama',url:'https://drive.google.com/file/d/10ukR5AkrSHC7Tk7kJ1c6bb6s0QwA---u/view'},
        {name:'Perawatan Kedaruratan',url:'https://drive.google.com/file/d/11Y2kGA0j_giZ98xmDXwrIS-E0QlRcilz/view'},
        {name:'Pendidikan Remaja Sebaya',url:'https://drive.google.com/file/d/1bMwXSDgT-9tbpsJXc4lm45tddJ1KC9GK/view'},
        {name:'Siap Siaga Bencana',url:'https://drive.google.com/file/d/1oaWWrbnkdklnhVDrK23a_CxFM0HeLJyx/view'},
        {name:'Donor Darah',url:'https://drive.google.com/file/d/10rTYAk8r-mlVrEjmN1fj7qgOtiyE2sUW/view'}
    ]
    return{
        type:'ALL_MATERI',
        payload: materi
    }
}
export function allPosts(){
    const token="AIzaSyAAfoTDgahI0E8qhFYd556fxM1oAsxcWJg";
    const posts= axios.get('https://www.googleapis.com/blogger/v3/blogs/3431680153533403598/posts?fetchBodies=false&key=AIzaSyAAfoTDgahI0E8qhFYd556fxM1oAsxcWJg');

    return{
        type:'ALL_POSTS',
        payload: posts
    }
}