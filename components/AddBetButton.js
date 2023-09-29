'use client';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

    const AddBetButton = () => {
      const [fabBottom, setFabBottom] = useState (16);

      const checkFooterVisibility = () => {
        const footer = document.querySelector('footer');
        const rect = footer.getBoundingClientRect();

        if(rect.top < window.innerHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          setFabBottom(visibleHeight + 16);
        } else {
          setFabBottom(16);
        }
      };

      useEffect(() => {
        checkFooterVisibility();

        window.addEventListener('scroll', checkFooterVisibility);
        return () => window.removeEventListener('scroll', checkFooterVisibility);
      }, []);

        return (
          <Fab 
            href={"/add"} 
            passHref 
            component={Link}
            sx={{
              position: {
                xs: 'fixed',
                md: 'static'
              },
              bottom: {
                xs: fabBottom,
                md: 'auto'
              },
              right: {
                xs: 16,
                md: 'auto'
              },
              transition: 'bottom 0.3s ease-in-out' 
            }}
            variant="extended" 
            color="primary" 
            aria-label="add bet"
          >
          <AddIcon sx={{ mr: 1 }} />
          <Box component="span" sx={{ mr: 1 }}>Add bet</Box>
      </Fab>
        );
      };

    export default AddBetButton;