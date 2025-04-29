import React, {useEffect,useState} from 'react'
import style from './Timer.module.css'
import {formatTime, calculate} from '../utils/auxiliaryFunctions.js'


const Timer = () => {
  const [time,setTime] = useState(0);  // current time in seconds
  const [initialTime, setInitialTime] = useState(0);  // Time initially set by the user
  const[isRunning, setIsRunning] = useState(false); //Tracks if the timer is running or paused
  const [edit, setEdit] = useState({false: null, value: ''}) // state for editing field and value
  
  return (
    <div>Timer</div>
  )
}

export default Timer