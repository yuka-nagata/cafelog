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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';


export default function PostList() {
    const { data } = useContext(HomeContext);

    return <>
    <div>Post</div>
    <Grid container spacing={2}>
        {data.map((post)=>{ return <Grid size={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.name}
                subheader={post.visitedDate.toString()}
            />
            <CardMedia
                component="img"
                height="194"
                src="https://cdn.pixabay.com/photo/2016/11/19/12/54/drink-1839134_1280.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="comment" sx={{ color: 'text.secondary' }}>
                    Comment: {post.comment}
                </Typography>
            </CardContent>
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