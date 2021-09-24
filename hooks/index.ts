import { useQuery } from 'react-query'
import { BlogProps } from 'types'
const fetchBlogs = async () => {
    const response = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts`)
    return await response.json()
}

const useBlogs = () => {
    const {data, isLoading, error} = useQuery('posts', fetchBlogs)
    const blogs = (!isLoading || error) ? data.sort(sortBlogs):[]
    return {
        isLoading, 
        error,
        blogs
    }
}

const sortBlogs = (blog1: BlogProps, blog2: BlogProps) => (blog1.createdAt > blog2.createdAt)? -1: 1   
export {useBlogs, fetchBlogs }