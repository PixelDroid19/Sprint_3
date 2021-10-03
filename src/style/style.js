import {createTheme,styled} from '@material-ui/core/styles'
import {
  Toolbar,
  alpha,
  InputBase
} from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#131921'
    },
    secondary: {
      main: '#242F3E'
    },
    warning: {
      main: '#F0AD64'
    }
  },
  shadows: ['none']
})

export const ToolbarCustom = styled(Toolbar)`
  max-height: 40px;
  min-height: 30px;
`

export const ToolbarCustomPrimary = styled(Toolbar)`
  max-height: 64px;
  min-height: 64px;
`

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '0',
  color: 'primary',
  zIndex: '999',
  borderRadius: '0px 8px 8px 0px',
  backgroundColor: '#F0AD64'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000',
  backgroundColor: 'white',
  borderRadius: '10px',
  width: '500px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));