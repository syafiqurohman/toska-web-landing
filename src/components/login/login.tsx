import React, { useState, ChangeEvent, FormEvent } from 'react'
import { styled } from '@mui/system'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { signIn } from 'next-auth/react'

const Form = styled('form')`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)};
`
const SubmitButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`
export default function SignInSide() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/panduan',
    })

    if (result?.error) {
      console.log(result.error)
    } else {
      console.log(result)
    }
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: "url('/images/login-hero.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link href="/">
              <Image src="/images/toska-logo.png" alt="Certificate icon" width={200} height={75} quality={100} />
            </Link>
          </Box>
          <Typography component="h1" variant="h3" sx={{ mt: 3 }}>
            Masuk dan Akses Panduan
          </Typography>
          <Form onSubmit={handleSubmit}>
            <TextField
              onChange={handleEmailChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={handlePasswordChange}
              />
            </FormControl>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <SubmitButton type="submit" fullWidth variant="contained">
              Sign In
            </SubmitButton>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
              &copy;{' '}
              <Link color="inherit" href="https://mui.com/">
                TenTackle
              </Link>{' '}
              {new Date().getFullYear()}.
            </Typography>
          </Form>
        </Box>
      </Grid>
    </Grid>
  )
}
