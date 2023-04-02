import { styled } from "@material-ui/core/styles"
import { Button as BaseButton } from "@material-ui/core";

export const Button = styled(BaseButton)(({ theme }) => (
{

    borderRadius: 4,
    border: `0px solid ${theme.palette.text.primary}`,
    fontSize: '130%',
    
    width: 210, 
    height: 50, 
    backgroundColor: theme.palette.type === 'light' ? '#B6EE82': '#3AA824',
    textTransform: "none",
    color: theme.palette.text.primary,
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",

    '&:hover': {
        filter: "brightness(0.8)",
        backgroundColor: theme.palette.type === 'light' ? '#76D90B': '#A9EE70', // C2ECBF   '#A9EE70': '#A9EE70'
        boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
        border: `0px solid ${theme.palette.text.primary}`,
    },
}))


export const ButtonSecondary = styled(BaseButton)(({ theme }) => (
{
  
    border: `1px solid #373737`,
    borderRadius: 4,

    marginLeft: 0,
    width: 210, 
    height: 50, 
    fontSize: '130%',

    backgroundColor: theme.palette.type === 'light' ? 'rgba(0,0,0,0)': 'rgba(0,0,0,0)',
    textTransform: "none",
    color: theme.palette.text.primary,

    '&:hover': {
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0,0,0,0.3)': 'rgba(0,0,0,0.3)',
        boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
        border: `1px solid ${theme.palette.text.primary}`,
    },
}))
    

