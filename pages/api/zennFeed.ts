import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/hrtk92/feed')
  const feed = await response.json()
  res.json(feed)
}
