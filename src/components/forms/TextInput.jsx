import React from 'react';
import FlexColumn from "../layouts/FlexColumn";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";


const StyledInput = styled('input')({
    background: 'transparent',
    border: '1px solid',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    color: 'var(--gray-500)',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    height: '44px',
    minHeight: '20px',
    marginRight: '12px',
    padding: '12px 12px',
    transition: 'all 200ms ease',
    width: '100%',
    '&:hover': {
        outline: 'none'
    },
    '&:focus': {
        outline: 'none',
    },
    '&.invalid': {
        border: '1px solid var(--red-600)',
    }
}, ({readOnly, color}) => ({
    cursor: readOnly ? 'pointer' : 'text',
    color: color ? color : 'var(--gray-500)',
}));


const StyledTextArea = styled('textarea')({
    background: 'transparent',
    resize: 'none',
    border: '1px solid',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    color: 'var(--gray-500)',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    minHeight: '20px',
    marginRight: '12px',
    padding: '12px 12px',
    transition: 'all 200ms ease',
    width: '100%',
    '&:hover': {
        outline: 'none'
    },
    '&:focus': {
        outline: 'none',
    },
    '&.invalid': {
        border: '1px solid var(--red-600)',
    }
}, ({readOnly, color}) => ({
    cursor: readOnly ? 'pointer' : 'text',
    color: color ? color : 'var(--gray-500)',
}));


export default function TextInput({
                                      label,
                                      fullWidth,
                                      widths,
                                      value,
                                      onChange,
                                      readOnly,
                                      variant,
                                      color,
                                      textArea,
                                      ...props
                                  }) {
    return (
        <FlexColumn fullWidth={fullWidth} widths={widths} spacing={1} {...props} >
            <Typography variant={'caption'}>{label}</Typography>
            {textArea ?
                <StyledTextArea
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                    variant={'outlined'}
                    color={color}
                    rows={5}
                /> :
                <StyledInput
                    type={'text'}
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                    variant={'outlined'}
                    color={color}
                />}
        </FlexColumn>
    )
}
