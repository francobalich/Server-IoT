import { response } from 'express'
export const getTest = async (req, res = response) => {
  try {
    return res.status(404).send({
      id: '0',
      state: false,
      respuesta: 'API Not Implemented (API Test)'
    })
  } catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}

export const postTest = async (req, res = response) => {
  try {
    return res.status(404).send({
      id: '0',
      state: false,
      respuesta: 'API Not Implemented (API Test)'
    })
  } catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}

export const putTest = async (req, res = response) => {
  try {
    return res.status(404).send({
      id: '0',
      state: false,
      respuesta: 'API Not Implemented (API Test)'
    })
  } catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}

export const deleteTest = async (req, res = response) => {
  try {
    return res.status(404).send({
      id: '0',
      state: false,
      respuesta: 'API Not Implemented (API Test)'
    })
  } catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}
