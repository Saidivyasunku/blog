import React from 'react'
import styled from 'styled-components'
import { AuthorProps } from 'types'
const Author = (data:AuthorProps): JSX.Element | null => {
    const {name, avatar} = data;
    if(!name || !avatar)  return null;
    return (
        <StyledAuthor>
            <img src={avatar} alt={name} width="30"/>
            <span className="d-inline-flex">{name}</span>
        </StyledAuthor>
    )

}

const StyledAuthor = styled.div`
    margin-left:10px;
    img{
        border-radius:50%;
    }
    span{
        margin-left:5px;
    }

`
Author.defaultProps = {
    avatar:"",
    name: "",
    id:""
}
export default Author