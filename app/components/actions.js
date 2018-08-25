export function allMenu(){
    // data simulation
    const menu= [
        { name: 'Model', icon: 'person', value:'Home' },
        { name: 'Kamera', icon: 'camera' },
        { name: 'Gambar', icon : 'images', value:'Picture'},
        { name: 'Huruf', icon: 'create',value:'Font' },
        { name: 'Forme', icon : 'star'},
        { name: 'Efek', icon: 'color-wand' },
        { name: 'Stikcer', icon: 'happy' },
        
    ]

    return {
        type: 'ALL_MENU',
        payload: menu
    }
}
export function allJadwal(){
	const jadwal = [
		{date:'02 Januari 2019', venue:'SMK N 1 Gombong', time:'08.00 s.d. selesai', host:'SMK N 1 Gombong'},
        {date:'02 Januari 2019', venue:'SMK N 1 Gombong', time:'08.00 s.d. selesai', host:'SMK N 1 Gombong'},
        {date:'02 Januari 2019', venue:'SMK N 1 Gombong', time:'08.00 s.d. selesai', host:'SMK N 1 Gombong'},
        {date:'02 Januari 2019', venue:'SMK N 1 Gombong', time:'08.00 s.d. selesai', host:'SMK N 1 Gombong'},
        {date:'02 Januari 2019', venue:'SMK N 1 Gombong', time:'08.00 s.d. selesai', host:'SMK N 1 Gombong'},
	]

	return {
		type: 'ALL_JADWAL',
		payload : jadwal
	}
}
export function allMateri(){
    const materi=[
        {name:'Materi Kepalangmerahan',item:[
            {name:'Sejarah Kepalangmerahan'},
            {name:'Makna Badge PMR'},
            {name:'Lagu Mars PMI dan Bhakti Remaja'},
            {name:'Tujuh Prinsip Palang Merah dan Tri Bhakti'}
        ]},
        {name:'Pertolongan Pertama',item:[
            {name:'Pembalutan & Pembidaian'},
            {name:'Evakuasi'},
            {name:'Keracunan'},
            {name:'Kedaruratan Medis'},
            {name:'BHD dan RJP'},
            {name:'Pertolongan Korban Banyak'}
        ]},
        {name:'Perawatan Keluarga',item:[]},
        {name:'Pasang Bongkar Tenda & Tandu',item:[]},
        {name:'Pendidikan Remaja Sebaya',item:[]},
        {name:'Triage',item:[]}
    ]
    return{
        type:'ALL_MATERI',
        payload: materi
    }
}
export function allObat(){
    const obats=[
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
        {name:'Oskadon', indikasi:'Obat Sakit Kepala', stok:'2'},
    ]
    return{
        type: 'ALL_OBAT',
        payload: obats
    }
}
export function allPasien(){
    const pasien=[
        {name:'Sudarmono', keluhan:'Sakit Kepala', petugas:'Wahyuni'},
        {name:'Sudarmono', keluhan:'Sakit Kepala', petugas:'Wahyuni'},
        {name:'Sudarmono', keluhan:'Sakit Kepala', petugas:'Wahyuni'},
        {name:'Sudarmono', keluhan:'Sakit Kepala', petugas:'Wahyuni'},
    ]
    return{
        type: 'ALL_PASIEN',
        payload: pasien
    }
}