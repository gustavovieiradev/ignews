import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Gustavo'},
    {id: 2, name: 'Ana'},
    {id: 3, name: 'Cross'},
    {id: 4, name: 'Billy'},
  ]

  return response.json(users);
}