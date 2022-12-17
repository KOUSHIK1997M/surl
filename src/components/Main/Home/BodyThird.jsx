import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function BodyThird() {
    return (
        <Box sx={{ bgcolor: '#ECF0F1 ', pt: '120px', pb: '100px', mt: '60px' }}>
            <Container maxWidth="lg" sx={{}}>
                <Box sx={{
                    color: "#273746",
                }}>
                    <Typography variant='h4' sx={{ mb: '20px' }}> Simple and fast URL shortener!</Typography>
                    <Typography>
                        ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter,
                        Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button.
                        On the next screen, copy the shortened URL and share it on websites, chat and e-mail.
                        After shortening the URL, check how many clicks it received.
                    </Typography>
                    <Typography variant='h4' sx={{ mb: '20px' ,mt:'50px'}}> Shorten, share and track</Typography>
                    <Typography>
                        Your shortened URLs can be used in publications, documents, advertisements, blogs, forums,
                        instant messages, and other locations. Track statistics for your business and projects by
                        monitoring the number of hits from your URL with the click counter, you do not have to register.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
