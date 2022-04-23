//import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest , response: NextApiResponse) => {
    const db = new DB()
    //obeter el id
    const id = request.query.id
    //conectarnos a la BD
    const avo = await db.getById(id as string) //el entrty obtenido es el avo
    
    //db.getById()
    // response.statusCode = 200
    // response.setHeader('Content-type', 'application/json')
    // //res.end(JSON.stringify({hello: 'world'})) //imprimendo cualqueir respuesta
    // response.end(JSON.stringify({data: entry}))
    //esto se simplifica en: 
    //helper de NodeJs 
    //response.status(200).json({data: entry})
    response.status(200).json({avo}) 

}

export default allAvos