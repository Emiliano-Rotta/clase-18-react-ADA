import { useState } from 'react';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import s from "./FondoOscuro.module.css"

function FondoOscuro(props) {

    const [solLuna, setSolLuna] = useState(true);
    
    function sol() {
        setSolLuna(false)
        props.boxClicked();
    }
    function luna() {
        setSolLuna(true)
        props.boxClicked();
    }

    return (
        <div>
            {(solLuna === true)?
            <button className={s.gray} onClick={()=>sol()}>
                <NightlightRoundIcon />   
            </button> :
            <button className={s.pink} onClick={()=>luna()}>
                <Brightness5Icon />    
            </button>}
        </div>
    )
}

export default FondoOscuro;