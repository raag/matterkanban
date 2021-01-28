import { NextApiRequest, NextApiResponse } from 'next'
import config from '@config'

const createTask = async (request: NextApiRequest, response: NextApiResponse) => {

   const { text, channel_name} = request.query
   const projectId = config.projects[channel_name as keyof Object]

   if (!projectId) {
      response.statusCode = 403
      response.end('This channel is not linked to any project')
   }

   const params = {
      'jsonrpc': '2.0',
      'method': 'createTask',
      'id': 1176509098,
      'params': {
         'owner_id': config.user_id,
         'creator_id': config.user_id,
         'description': text,
         'title': text,
         'project_id': projectId,
         'color_id': 'green',
      }
   }

   const headers = new Headers()
   const auth = Buffer.from(`jsonrpc:${config.api_key}`, 'binary').toString('base64')
   headers.set('X-API-Auth', auth)

   const requestConfiguration = {
      method: 'POST',
      headers,
      body: JSON.stringify(params)
   }

   const rawResult = await fetch(config.kanban_url, requestConfiguration)
   const result = await rawResult.json()

   debugger
   console.log(result)

   response.statusCode = 200
   response.end(`You created the task "${text}"`)
}

export default createTask