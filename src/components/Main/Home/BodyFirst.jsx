import * as React from 'react';
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, AlertTitle, Button, Stack, TextField, Typography } from '@mui/material';
import { SERVER_URI } from '../../../config/keys'
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BodyFirst() {
    const [values, setValues] = React.useState({
        longUrl: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [error, setError] = useState("");
    const [Success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${SERVER_URI}/url/shorten`;
            const { data: res } = await axios.post(url, values);
            console.log(res.message);
            setSuccess(values.longUrl)
            setValues({longUrl: res.data.shortUrl})
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <Box sx={{ bgcolor: '#F5EEF8', pt: '120px', pb: '60px', mt: '40px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={10} sx={{ mb: '50px' }}>
                        <Item>
                            <Typography variant='h4' sx={{ mb: '20px', color: 'black' }}>Paste the URL to be shortened</Typography>
                            <Grid container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={8}>
                                    <Item style={{ boxShadow: "none" }}>
                                        {error && (
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                This is an error alert — <strong>{error}</strong>
                                            </Alert>
                                        )}
                                        {Success && (
                                            <Alert severity="success">
                                                <AlertTitle>Success</AlertTitle>
                                                This is a success alert — <strong>Your Long Url is:   {Success}</strong>
                                            </Alert>
                                        )}
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={8}>
                                    <Item style={{ boxShadow: "none" }}>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={0}
                                        >
                                            <TextField
                                                fullWidth
                                                id="outlined-text-input"
                                                label="Enter the link here"
                                                type="text"
                                                autoComplete="off"
                                                value={values.longUrl}
                                                onChange={handleChange('longUrl')}
                                            />
                                            <Button onClick={handleSubmit} sx={{ bgcolor: 'blue', color: 'black', p: '15px' }}>Shorten</Button>
                                        </Stack>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Typography variant='h5' sx={{ mb: '20px' }}>
                                Surl is a free tool to shorten a URL or reduce a link
                                Use our URL Shortener to create a shortened link making it easy to remember
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
