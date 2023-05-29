import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://zenn.dev/api/users/hrtk92')
  const user = await response.json()
  res.json(user)
}
