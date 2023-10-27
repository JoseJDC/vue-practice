export default class Post {
    userId?: number
    id?: number
    title?: number
    body?: string
    constructor(userId?: number, id?: number, title?: number, body?: string) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
    }
}