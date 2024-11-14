import {Button, Box} from '@mui/material';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return(
        <Box>
            {['About', 'Contact', 'Portfolio', 'Resume'].map((section) => (
                <Button key={section} component={NavLink} to={`/${section.toLowerCase()}`}
                sx= {{
                    color: 'inherit',
                    textDecoration: 'none',
                    margin: '5 5px',
                    '&.active': {
                        backgroundColor: 'secondary.main',
                        color: 'blue',
                    },
                    '&.hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}></Button>
            ))}
        </Box>
    );
}