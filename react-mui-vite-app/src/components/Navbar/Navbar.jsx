import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar className='bg-white' position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Vite App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}