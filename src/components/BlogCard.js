import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

const BlogCard = ({title,description,imageURL,userName}) => {
    return (
        <div>
           
        }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                             {userName ? userName.charAt(0) : ""}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={imageURL}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>{userName}</b> {":"} {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default BlogCard