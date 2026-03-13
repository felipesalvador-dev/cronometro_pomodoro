import styles from "./style.module.css"
import {House} from 'lucide-react'
import {History} from "lucide-react"
import {Settings} from "lucide-react"
import {Sun} from "lucide-react"

export function Menu(){
    return(
        <>
        <div className= {styles.menu}>
            <a className = {styles.menuLink} href="#"><House/>
            </a>
            <a className = {styles.menuLink} href="#"><History/>
            </a>
            <a className = {styles.menuLink} href="#"><Settings/>
            </a>
            <a className = {styles.menuLink} href="#"><Sun/>
            </a>                    
        </div>
        </>
    )
}