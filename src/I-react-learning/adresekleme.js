import {useState} from 'react'

function Adresekleme() {
    const [route, setRoute] = useState('');

  return (
    <>
        
        <input type='text' placeholder='Güzergah'></input>
        <button>Yeni Durak Ekle</button>
        <hr/>
        <div>
            <input type="text" placeholder='Durak adı'/>
            <input type="text" placeholder='Enlem'/>
            <input type="text" placeholder='Boylam'/>
        </div>
        <hr/>
        <button>Kaydet</button>

    </>
  )
}

export default Adresekleme;