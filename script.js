const miniX = {
  user: [
    {
      usename: 'gabriel'
    }
  ],
  posts: [
    {
      id: 1,
      owner: 'Gabriel',
      content: 'First X'
    }
  ]
}


function createPost(dados) {
  miniX.posts.push({
    id: miniX.posts.length + 1,
    owner: dados.owner,
    content: dados.content
  })
}
createPost({ owner: 'Valeria', content: 'Second X' })
createPost({ owner: 'Ricardo', content: 'Third X' })
console.log(miniX.posts)


function getPosts() {
  return miniX.posts;
}
console.log(getPosts())


function updatePost(id, newContent) {
  const updatePost = getPosts().find((post) => {
    return post.id === id;
  });
  console.log(updatePost)

  updatePost.content = newContent
}
updatePost(1, "update")
console.log(getPosts())


function deletePost(id) {
  const updatedPostList = getPosts().filter((postCurrent) => {
    return postCurrent.id !== id;
  })
  miniX.posts = updatedPostList

}

deletePost(1)
deletePost(2)
deletePost(3)

console.log(getPosts());