import React from "react";
import { useTheme, withStyles } from "@material-ui/core/styles";
import { TextField as TextFieldBase } from "@material-ui/core";

function ThemeTextField({
    children,
    colorBrightness,
    color,
    ...props
}) {
    var theme = useTheme();

    var Styled = createStyled({
        baseStyle: {
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "140.62%",
            color: "rgba(0, 0, 0, 0.5)",
            padding: 0,
            height: '50px',
            borderColor: theme.palette.common.secondary,
        },
        root: {
            borderColor: theme.palette.common.secondary
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
                <TextFieldBase
                    classes={{
                        root: classes.root
                    }}
                    className={classes.baseStyle}
                    {...props}
                >
                    {children}
                </TextFieldBase>
            )}
        </Styled>
    );
}

export default ThemeTextField;