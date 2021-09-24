export type AuthorProps = {
    name: string,
    id:Number,
    avatar: string,
}
export type CommentProps = {
    title: string
    description: string
    id?:string
    key?:string
    createdAt?:Date
}

export type BlogProps = {
    id:string,
    title: string,
    description: string,
    createdAt:Date,
    authors:[AuthorProps],
    comments:[CommentProps]
}
