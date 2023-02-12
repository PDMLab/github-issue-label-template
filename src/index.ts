import { Octokit } from 'octokit'

const auth = process.env.GH_PAT

const octokit = new Octokit({ auth })

async function main() {
  const {
    data: { login }
  } = await octokit.rest.users.getAuthenticated()
  console.log('Hello, %s', login)
}

main()
