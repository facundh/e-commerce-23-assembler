
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
// type Props = {}

const ErrorPage = () => {
  return (
    <Stack sx={{ width: '100%', textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", height:"100vh" ,padding:40}} spacing={2}>
            <Alert severity="error" sx={{padding:20}}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>Page not found!</strong>
            </Alert>
            <Button variant="outlined"><Link to='/'> Back To Home Page</Link></Button>
        </Stack> 

  )
}

export default ErrorPage