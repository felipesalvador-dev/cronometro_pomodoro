import styles from "./style.module.css"
import {Timer} from 'lucide-react'
export function Logo(){
    return(
        <>

        <div className= {styles.logo}>
            <a className = {styles.logoLink} href="#"><Timer/>
            <span>Cronometro</span>
            </a>            

        </div>
        </>
    )
}