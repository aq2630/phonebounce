import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: '50px',
        padding: '0 30px',
        boxShadow: 'none',
        textTransform: 'inherit',
        [theme.breakpoints.down('sm')]:{
            width : '100%'
        }
    },
    containedPrimary: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: '#B41C1C',
        }
    },
    containedSecondary: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white
    },
    outlined: {
        border: `1px solid ${theme.palette.grey[500]}`,
        color: theme.palette.grey[900],
        '&:hover': {
            border: `1px solid ${theme.palette.grey[700]}`,
            backgroundColor: theme.palette.grey[700],
            color: theme.palette.common.white
        }
    },
    // text:{
    //     color:'red'
    // }
}));

export default function ThemeButton({ children, ...rest }) {
    const classes = useStyles();

    return (
        <Button
            {...rest}
            classes={{
                root: classes.root,
                containedPrimary: classes.containedPrimary,
                containedSecondary: classes.containedSecondary,
                outlined: classes.outlined,
                // text: classes.text
            }}
        >
            {children}
        </Button>
    );
}


// import React from "react";
// import { useTheme, makeStyles, withStyles } from "@material-ui/core/styles";
// import { Button as ButtonBase, } from "@material-ui/core";
// import classnames from 'classnames';


// function ThemeButton({ children, color, shade, className, endIcon, commonColor, ...props }) {
//     var theme = useTheme();


//     var Styled = createStyled({
//         root: {

//         },
//         contained: {
//             backgroundColor: color ? 'inherit' : theme.palette.common[commonColor],
//             color: theme.palette.common.white
//         },
//         outlined: {

//         },
//         text: {
//             color: theme.palette.common[color]
//         },
//         select: {
//             backgroundColor: theme.palette.primary.main,
//             color: theme.palette.common.white,
//         },
//     });


//     function createStyled(styles, options) {
//         var Styled = function (props) {
//             const { children, ...other } = props;
//             return children(other);
//         };

//         return withStyles(styles, options)(Styled);
//     }


//     return (
//         // <Styled>
//         //     {({ classes }) => (
//         <ButtonBase
//             // classes={{
//             //     contained: classes.contained,
//             //     root: classes.root,
//             //     outlined: classes.outlined,
//             // }}
//             {...props}
//             className={classnames(
//                 // {
//                 //     [classes.select]: props.select,
//                 // },
//                 className,
//             )}
//         >
//             {children}
//         </ButtonBase>
//         //     )}
//         // </Styled>
//     );
// }



// export default ThemeButton;