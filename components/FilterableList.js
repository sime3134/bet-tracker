import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
 
 const FilterableList = ( { bets } ) => {
    const sortedBets = [...bets].sort((a,b) => new Date(b.date) - new Date(a.date));
    
    return (
        <>
            {sortedBets.map((bet => {
                return (
                    <Accordion key={bet.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${bet.id}a-content`}
                            id={`panel${bet.id}a-header`}
                            >
                            <Typography sx={{ fontWeight: 'bold'}}>{bet.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bet placed: {bet.date} Amount bet: {bet.sum}, Odds: {bet.odds}, Result: {bet.status}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            }))}
        </>
    );
 };

export default FilterableList;