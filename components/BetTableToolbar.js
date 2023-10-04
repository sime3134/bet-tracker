
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import { Search, FilterList } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { betStatus } from '@/utilities/constants';

const BetTableToolbar = ({ searchField, setSearchField, selectedStatus, setSelectedStatus }) => {

    const handleSelectedStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <Toolbar>
            <Grid container spacing={2} width="100%">
                <Grid xs={12} sm={6} xl={4} >
                    <TextField
                        required
                        id="Search"
                        sx={{ 
                            mt: { xs: 2, sm: 2 },
                            mb: { xs: 2, sm: 2 },
                        }}
                        placeholder="Search"
                        variant="outlined"
                        value={searchField}
                        onChange={(event) => setSearchField(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid xs={12} sm={4} xl={6}>
                <TextField  
                    select id="Status"
                    sx={{ 
                        mt: { xs: 0, sm: 2 },
                        mb: { xs: 0, sm: 2 },
                        width: { xs: '100%', sm: 'fit-content'}
                    }}
                    label="Status"
                    variant='outlined'
                    value={selectedStatus}
                    onChange={handleSelectedStatusChange}>
                    <MenuItem value="all">All</MenuItem>
                    {betStatus.map((status) => (
                        <MenuItem key={status.name} value={status.name}>{status.label}</MenuItem>
                    ))}
                </TextField>
                </Grid>
                <Grid container xs={12} sm={2} justifyContent="flex-end" alignItems="center">
                    <Tooltip 
                    title="Filter list"
                    sx={{
                        mt: { xs: 0, sm: 2 },
                        mb: 2
                    }}
                    >
                        <IconButton>
                            <FilterList />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default BetTableToolbar;