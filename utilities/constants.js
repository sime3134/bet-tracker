export const drawerWidth = 280;
export const footerHeight = 48;

export const views = [
    { name: '/', label: 'Dashboard' },
    { name: '/your-bets', label: 'Bets' },
    { name: '/add', label: 'Add', nested: true },
    { name: '/active', label: 'Active Bets', nested: true },
    { name: '/statistics', label: 'Statistics' },
];

export const betStatus = [
    {name: 'win', label: 'Win'},
    {name: 'loss', label: 'Loss'},
    {name: 'cashOut', label: 'Cash out'},
    {name: 'open', label: 'Open'},
]