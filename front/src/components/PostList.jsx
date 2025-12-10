import {useEffect, useState, createContext, useContext} from "react";
import AddPostModal from "./AddPostModal";
import Modal from "react-modal";
import {HomeContext} from "./Home.jsx";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Rating} from "@mui/material";


export default function PostList() {
    const { data, setData } = useContext(HomeContext);

    const deleteData = async(e,id) => {
        e.preventDefault();

        fetch(`/api/cafe/${id}`, {method:"DELETE"})
            .then(() => fetch("/api/cafe"))
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }

    return <>
    <div>Post</div>
    <Grid container spacing={2}>
        {data.map((post, index)=>{ return <Grid size={4} key={index}>
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <DeleteIcon onClick={(e)=>deleteData(e,post.id)} />
                    </IconButton>
                }
                title={post.name}
                subheader={post.visitedDate.toString()}
            />
            <CardMedia
                component="img"
                height="194"
                src={post.picture}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="comment" sx={{ color: 'text.secondary' }}>
                    {post.comment}
                </Typography>
            </CardContent>
            <Rating value={post.rate} readOnly/>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    </Grid>;}
    )}
    </Grid>
    </>
}