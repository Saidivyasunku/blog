import React from 'react'
import styled from 'styled-components'
import { CommentProps } from 'types'
const Comment = (data:CommentProps): JSX.Element | null => {
    const {title, description} = data;
    if(!title || !description)  return null;
    return (
        <StyledComment>
            <div>{description}</div>
            <div><b>Added by</b>{title}</div>
        </StyledComment>
    )

}


const StyledComment = styled.div`
  background-color:#f6f8fa;
  padding:10px;
  margin-bottom:10px;
  b{
    margin-right:5px;
    font-size:12px
  }

`

Comment.defaultProps = {
  id:"",
  title: "",
  description: "",
}
export default Comment