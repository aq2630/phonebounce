import React from "react";
import { useTheme,  withStyles } from "@material-ui/core/styles";
import { Typography as TypographyBase } from "@material-ui/core";

function ThemeTypography({
    children,
    color,
    otherColor,
    ...props
}) {
    var theme = useTheme();

    var Styled = createStyled({
        colorTextPrimary: {
            color: theme.palette.common.white
        },
        customColor :{
            color: theme.palette.common[otherColor]
        }
    });


    function createStyled(styles, options) {
        var Styled = function (props) {
            const { children, ...other } = props;
            return children(other);
        };

        return withStyles(styles, options)(Styled);
    }


    return (
        <Styled>
            {({ classes }) => (
                <TypographyBase
                    classes={{
                        colorTextPrimary: classes.colorTextPrimary
                    }}
                    className = {classes.customColor}
                    {...props}
                >
                    {children}
                </TypographyBase>
            )}
        </Styled>
    );
}

export default ThemeTypography;