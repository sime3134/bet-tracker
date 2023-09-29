import { Box, Card, CardContent, Icon, Typography } from "@mui/material";

const StatisticCard = ({ value, title, icon, currency }) => {
    const currencyStyle = { 
        marginLeft: '4px',
        marginBottom: '4px',
        fontSize: '1.2rem',
    }
    
    const getBackgroundColor = () => {
        if(value > 0) {
            return "success.light";
        } else if(value < 0) {
            return "error.light";
        }
        return 'inherit';
    }

    return (
        <Card raised={true} sx={{ pl:2, pr:2, pb:2, pt: 2, borderBottom: 5, borderColor: getBackgroundColor() }} >
            <CardContent>
                <Typography variant="h4" sx={{textAlign: 'center'}}>
                    {title}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="flex-end" sx={{mt:5}}>
                    <Box>
                        <Typography variant="h4" component="span" sx={{ mt: 5, ml: 1}}>
                        <Icon sx={{mr:1, color: getBackgroundColor() }}>{icon}</Icon>{value}
                        </Typography>
                    </Box>
                    <Typography variant="body2" component="span" style={currencyStyle}>
                        {currency}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default StatisticCard