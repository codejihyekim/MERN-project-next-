import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Head from 'next/head';
import Card from '@mui/material/Card';

const theme = createTheme();

export function BoardWrite({onChange, onSubmit}) {
    
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    
                    <Typography component="h1" variant="h5">
                       tarvel review
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate="noValidate"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '80ch' }
                        }}>
                        <div>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="date"
                            label="날짜"
                            name="date"
                            autoComplete="date"
                            autoFocus
                            onChange={onChange}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="title"
                            label="제목"
                            type="title"
                            id="title"
                            autoComplete="title"
                            onChange={onChange}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="content"
                            label="내용"
                            type="content"
                            id="content"
                            multiline
                            rows={20}
                            autoComplete="content"
                            onChange={onChange}/>
                        <Button
                            type="submit"
                            fullWidth 
                            variant="contained"
                            sx={{
                                mt: 2,
                                mb: 5
                            }}>
                            등록
                        </Button>
                        </div>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
