import { Router } from 'express'
import {BadRequestError, UnauthorizedError, ForbiddenError, RequestTimeoutError, NotFoundError} from './helpers/apiErrors'

const routes = Router()

routes.get('/', async (req, res) =>{

    //throw new ApiError('Erro lançado no api error', 400)
    try{
        throw new Error('Erro do try')

        return res.json('ok')

    } catch (error){

        console.log(error)
        return res.status(500).json("")
        
    }
})

if (!teste){
   throw new BadRequestError("Your request could not be processed")
}

if (!teste2){
    throw new UnauthorizedError("You do not have the credentials to access this page")
 }

if (!teste3){
    throw new ForbiddenError("You do not have permission to access on this server")
 }

 if (!teste4){
    throw new NotFoundError("Page could not be found or does not exist ")
 }

if (!teste5){
    throw new RequestTimeoutError("The connection has timed out")
}

 export default routes