import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';



const FileCard = () => {
    const [form, setForm] = useState({
        text: '',
        file: null,
    })


    const handleTextChange = (e) => {
        setForm({
            ...form,
            text: e.target.value
            
        })
    }

    const handleFileChange = (e) =>{
        setForm({
            ...form,
            file : e.target.files[0]
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('file uploaded successfully!')
        console.log(form);

    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });



    return (
        <div>

            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{
                    bgcolor: 'white',
                    height: '30vh',
                    border: 3,
                    borderColor: '#1976d2',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '70px',

                }} >
                    <TextField id="outlined-basic" label="Enter file name" variant="outlined"
                    onChange={handleTextChange}
                        sx={{

                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderWidth: '3px',
                                    borderColor: '#1976d2',
                                }
                            },
                            marginBottom: '20px'
                        }} />
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}

                        onChange={handleFileChange}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file"
                            accept='application/pdf' />
                    </Button>

                    <Stack spacing={2} direction="row"
                        sx={{
                            marginTop: '13px'
                        }}>
                        <Button variant="outlined"
                        onClick={handleSubmit}
                        >Submit</Button>
                    </Stack>
                </Box>

            </Container>



        </div>
    )
}

export default FileCard