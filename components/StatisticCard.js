import { Box, Card, CardContent, Icon, Typography } from "@mui/material";



const StatisticCard = ({ value, title, icon, currency, backgroundColor }) => {
    const currencyStyle = { 
        marginLeft: '4px', 
        marginBottom: '4px',
        fontSize: '1.2rem',
    }

    const getValueColor = () => {
        if (value != 0) {
            return 'whiteText.main';
        }
        return 'inherit';
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
        <Card sx={{ backgroundColor: getBackgroundColor() }}>
            <CardContent>
                <Typography variant="h5" component="div" color={getValueColor()} >
                    <Icon sx={{ mt: 1 }} >{icon}</Icon> {title}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="flex-end">
                    <Typography variant="h3" component="span" color={getValueColor()}>
                        {value}
                    </Typography>
                    <Typography variant="body2" component="span" style={currencyStyle} color={getValueColor()}>
                        {currency}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default StatisticCard