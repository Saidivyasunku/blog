import React from 'react'
import styled from 'styled-components';
import Author from './Author';
import Comment from './Comment';
import {EMPTY_ARRAY} from 'constant'
import {BlogProps} from 'types'
type blogType = {
    blog:BlogProps
}
const Blog = ({blog}:blogType): JSX.Element => {
    const {title, description, authors, comments} = blog;
    return (
        <StyledBlog className="col-md-12">
            <div className="blog-wrapper">
                <h1 className="blog-title">{title}</h1>
                <p>{description}</p>
                <hr />
                <div>
                    <h4 className="section-title">Authors</h4>
                    <div className="d-inline-flex"> 
                        {
                            authors.map(author => (
                                <Author key={author.name} name={author.name} avatar={author.avatar} id={author.id}/>
                            ))
                        }
                    </div>
                </div>
                <hr />
                <div>
                    <h4 className="section-title">Comments</h4>
                    {comments?.length > EMPTY_ARRAY ?
                    ( <div>
                        {
                            comments.map(comment => (
                                <Comment key={comment.id} title={comment.title} description={comment.description} />
                            ))
                        }
                    </div>
                    ):(<div> No Comments</div>)
                    }
                </div>
            </div>
        </StyledBlog>
    )
}

const StyledBlog = styled.div`
    margin-bottom:20px;
    .blog-wrapper{
        background-color:#fff;
        padding:10px;
        border-radius: 6px;
        border: 1px solid #efefef;
    }
    .blog-title{
        font-size:18px;
    }
    .section-title{
        font-size:16px;
        text-decoration:underline;
    }

`

Blog.defaultProps = {
    blog:{
        id:"",
        title: "",
        description: "",
        createdAt:null,
        authors:[],
        comments:[]
    }
}
export default Blog


