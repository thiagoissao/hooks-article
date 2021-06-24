import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
  },
  sun: {
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(4),
  },
  moon: {
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(4),
  },
  button: {
    borderRadius: theme.spacing(3),
  },
  container: {
    height: '100%',
  },
}))

const PATH_FLOWER_OPEN = 'flower-open.png'
const PATH_FLOWER_CLOSE = 'flower-close.png'
const PATH_SUN = 'sun.png'
const PATH_MOON = 'moon.png'

const Flower = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [isNight, setIsNight] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const interval = setInterval(() => setIsNight((isNight) => !isNight), 5000)
    return () => clearInterval(interval)
  }, [])

  const setFlowerRules = () => {
    if (isNight) {
      setOpen(false)
      return
    }

    setOpen(true)
  }

  useEffect(() => {
    setFlowerRules()
  }, [isNight])

  return (
    <div className={classes.root}>
      <Grow in={isNight}>
        <img
          alt='sun and moon'
          width={100}
          height={100}
          className={classes.moon}
          src={isNight ? PATH_MOON : PATH_SUN}
        />
      </Grow>
      <Grow in={!isNight}>
        <img
          alt='sun and moon'
          width={100}
          height={100}
          className={classes.sun}
          src={PATH_SUN}
        />
      </Grow>
      <Grid
        className={classes.container}
        container
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Button className={classes.button} onClick={handleClick}>
            <img
              alt='Dormideira Flower'
              width={200}
              height={200}
              src={open ? PATH_FLOWER_OPEN : PATH_FLOWER_CLOSE}
            />
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Flower
