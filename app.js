require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORTNUMBER
const githubRes = {
    "login": "ASHIKEkfrazo",
    "id": 142868635,
    "node_id": "U_kgDOCIQAmw",
    "avatar_url": "https://avatars.githubusercontent.com/u/142868635?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ASHIKEkfrazo",
    "html_url": "https://github.com/ASHIKEkfrazo",
    "followers_url": "https://api.github.com/users/ASHIKEkfrazo/followers",
    "following_url": "https://api.github.com/users/ASHIKEkfrazo/following{/other_user}",
    "gists_url": "https://api.github.com/users/ASHIKEkfrazo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ASHIKEkfrazo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ASHIKEkfrazo/subscriptions",
    "organizations_url": "https://api.github.com/users/ASHIKEkfrazo/orgs",
    "repos_url": "https://api.github.com/users/ASHIKEkfrazo/repos",
    "events_url": "https://api.github.com/users/ASHIKEkfrazo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ASHIKEkfrazo/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-08-22T05:18:15Z",
    "updated_at": "2024-05-23T10:47:44Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('Hello World!')
  })

app.get('/github', (req, res) => {
    res.json(githubRes)
  })
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})