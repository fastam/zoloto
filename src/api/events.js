import axios from 'axios'

const API = axios.create({
  baseURL: '/api'
})

export const getEvents = (params) =>
  API.get('/events', { params })

export const getEvent = (id) =>
  API.get(`/events/${id}`)

export const getTags = () =>
  API.get('/tags')