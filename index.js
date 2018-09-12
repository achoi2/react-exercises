const blogs = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

let h = React.createElement;



let BlogTitle = (props) => h('li', null, [
    h('h2', null, props.title),
]) 

let BlogBody = (props) => h('li', null, [
    h('h2', {}, props.body),
    
])

let BlogId = (props) => h('h4', null, props.id)


class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            blogs: props.blogs
        }
    }
    render() {
        return h('div', {}, [h('h1', {}, 'React Blog'),
            h('ul', {}, this.state.blogs.map(blog => 
            h('li', {}, [
                h(BlogTitle, {title: blog.title}),
                h(BlogBody, {body: blog.body}),
                h(BlogId, {id: `Author UserID: ${blog.userId}`}),
                h('button', {
                    onClick: () => {
                        let newBlogs = this.state.blogs.filter(post => post.id !== blog.id)
                        this.setState({blogs: newBlogs})
                    }
                }, 'delete me'),
            h('button', {
                onClick: () => {
                    let newBlogs = this.state.blogs.map(post => 
                        (blog.id === post.id) ?
                             Object.assign({}, post, {title: blog.title + ' s'})
                            :
                                post
                    )
                    this.setState({blogs: newBlogs}) 
                }
            }, 'snakifiy')
        ])
    )),
        h('a', { href: 'https://jsonplaceholder.typicode.com/posts'}, 'copyright 2018')]);
    }
}

ReactDOM.render(h(Page, { blogs }), document.querySelector('.root'));


