import * as React from 'react';
import Box from '@mui/material/Box';


export default function Head() {
    return (
        <div>
            <Box
                component="img"
                sx={{
                    mt: '50px',
                    height:{
                        md:400,
                        sm:300,
                        xl:500,
                    },
                    width: "100%",
                    maxHeight: { xs: "auto", md: 400, xl: 550, sm:300 },
                    maxWidth: { xs: '100%', xl: "100%", md: "100%" },
                }}
                alt="The house from the offer."
                src="https://cutt.ly/img/pre_img.gif"
            />
        </div>
    );
}
