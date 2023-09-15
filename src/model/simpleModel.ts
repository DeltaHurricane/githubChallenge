export interface GitUser {
 avatar_url: string
 bio: string | null
 url: string
 name: string | null
 login: string
 email: string | null
 repos_url: string
 html_url: string
}

export interface GitRepo {
  description:string | null
  name: string
  html_url: string
}