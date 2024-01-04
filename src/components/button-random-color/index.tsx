import React, { MouseEventHandler } from "react"
import styles from './styles.module.scss'
interface IButtonRandomColorProps {
  label: string,
  onClick?: () => any,
  color?: string
}

export const ButtonRandomColor: React.FC<IButtonRandomColorProps> = ({ label, onClick }) => {



  return(
    <button className={styles.buttonRandom} onClick={onClick}>{label}</button>
  )
}