import { NextRequest } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { Octokit } = require("@octokit/rest");

export async function GET(req: NextRequest) {
  try {
    // const octokit = new Octokit({
    //   auth: process.env.GITHUB_TOKEN,
    // });

    const searchParams = req.nextUrl.searchParams;
    const owner = searchParams.get("owner");
    const repo = searchParams.get("repo");

    // const { data } = await octokit.rest.repos.get({
    //   owner: owner,
    //   repo: repo,
    // });

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    const data = await response.json();

    return Response.json(
      { starNumber: data.stargazers_count },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ starNumber: undefined }, { status: 500 });
  }
}
