import { Router } from 'express'
import { deleteTest, getTest, postTest, putTest } from '../controllers/test.controller.js'

export const testRouter = Router()

testRouter.get('/', getTest)

testRouter.post('/', postTest)

testRouter.put('/', putTest)

testRouter.delete('/', deleteTest)
