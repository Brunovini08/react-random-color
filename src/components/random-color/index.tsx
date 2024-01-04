"use client"

import { useEffect, useState } from 'react'
import { ButtonRandomColor } from '../button-random-color'
import styles from './styles.module.scss'
import randomColorHex from '@/utility/randomColorHex'
import randomColorRgb from '@/utility/randomColorRgb'

export const RandomColor = () => {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const handleGenerateRandomRgbColor = () => {
      const r = randomColorRgb(255)
      const g = randomColorRgb(255)
      const b = randomColorRgb(255)
      setColor(`rgb(${r}, ${g}, ${b})`)
  }

  const handleGenerateRandomHexColor = () => {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
      let hexColor = '#'
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorHex(hex.length)]
      }
      setColor(hexColor)
  }

  useEffect(() => {
    if(typeOfColor === 'hex') {
      handleGenerateRandomHexColor()
    } else {
      handleGenerateRandomRgbColor()
    }
  }, [typeOfColor])

  return (
    <div className={styles.container} style={{
      border: 0,
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundColor: color
    }}>
      <div className={styles.boxButtons}>
      <ButtonRandomColor label="Create HEX Color" onClick={() => setTypeOfColor('hex')} />
      <ButtonRandomColor label="Create RGB Color" onClick={() => setTypeOfColor('rgb')} />
      <ButtonRandomColor label="Create Random Color" onClick={typeOfColor === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRgbColor} />
      </div>
      <div className={styles.boxWratable}>
        <h3>{typeOfColor === 'rgb' ? `RGB COLOR ${color}` : `HEX COLOR ${color}` }</h3>
      </div>
    </div>
  )
}