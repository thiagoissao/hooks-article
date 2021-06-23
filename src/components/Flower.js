import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'   
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  button: {
    borderRadius: theme.spacing(3)
  }
}))

const PATH_FLOWER_OPEN = 'flower-open.png'
const PATH_FLOWER_CLOSE = 'flower-close.png'

const Flower = () => {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)
  const [isNight, setIsNight] = useState(false)
  
  
  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const interval = setInterval(() => setIsNight(isNight => !isNight), 5000)
    return () => clearInterval(interval)
  }, [])

  const setFlowerRules = () => {
    if(isNight){
      setOpen(false)
      return
    }

    setOpen(true)
  }

  useEffect(() => {
    setFlowerRules()
  }, [isNight])

  console.log('isNight', isNight)
  return (
    <Grid
      className={classes.root}
      container 
      justify='center' 
      alignItems='center'>
      <Grid item>
        <Button className={classes.button} onClick={handleClick}>
          <img 
            width={200}
            height={200}
            src={open ? PATH_FLOWER_OPEN : PATH_FLOWER_CLOSE}
          />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Flower
