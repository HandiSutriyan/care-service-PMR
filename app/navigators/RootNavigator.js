import { StackNavigator } from 'react-navigation';

import Home from '../components/pages/Home/Home.js'
import Materi from '../components/pages/Materi/Materi.js'
import Footer from '../components/pages/Footer/Footer.js'
import Doras from '../components/pages/Doras/Doras.js'
import Obat from '../components/pages/Obat/Obat.js'
import Pasien from '../components/pages/Pasien/Pasien.js'
import Petugas from '../components/pages/Petugas/Petugas.js'
import Stok from '../components/pages/Doras/Stok.js'
import subMateri from  '../components/pages/Materi/subMateri.js'

const RootNavigator = StackNavigator({
  Home:{
    screen: Home
  },
  Footer:{
  	screen: Footer
  },
  Materi:{
  	screen: Materi
  },
  subMateri:{
  	screen: subMateri
  },
  Doras:{
  	screen: Doras
  },
  Stok:{
    screen: Stok
  },
  Obat:{
    screen: Obat
  },
  Pasien:{
    screen: Pasien
  },
  Petugas:{
    screen: Petugas
  }
})

export default RootNavigator
