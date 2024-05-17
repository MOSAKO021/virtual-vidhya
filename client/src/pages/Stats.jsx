import React from 'react'
import { StatsContainer } from '../components';
// import customFetch from '../utils/customFetch';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export const loader = async () => {
  try {
    const response = await axios.get('/api/v1/jobs/stats')
    return response.data
  } catch (error) {
    return error
  }
}

const Stats = () => {
  const {defaultStats} = useLoaderData()
  return (
    <>
    <StatsContainer defaultStats={defaultStats}  onClick={redirect('/dashboard')}/>
    </>
  )
}

export default Stats
