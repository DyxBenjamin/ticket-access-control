import React, {forwardRef, useMemo} from "react";
// import {ForwardRef} from "../../types/utils";
import {css} from "@emotion/react";

// export interface BoxProps {
//     as?: String;
//     children?: React.ReactNode;
//     sx?: TemplateStringsArray;
//     css?: TemplateStringsArray;
// }

export const Box = forwardRef(
    function (props, ref) {
        const {
            css: cssProp,
            sx,
            as: Component = 'div',
            ...rest
        } = props;

        const baseStyles = useMemo(() => {
            return{
                boxSizing: 'border-box',
                margin: 0,
                minWidth: 0,
            }
        } , []);

        const sxBaseStyles = css(baseStyles);
        const sxPropStyles = css(sx);
        const cssPropStyles = css(cssProp);

        const style = useMemo(() => {
            return {
                ...baseStyles,
                ...sx,
                ...cssProp,
            }

        }, [baseStyles, sx, cssProp]);


        return <Component ref={ref} {...rest} style={style} />
        // return  useMemo(() => {
        //     return React.createElement(as, {
        //         ref,
        //         ...rest,
        //         css: style
        //     })
        // }, [as, ref, rest, style]);
    }
);

Box.displayName = 'Box';
export default Box;
