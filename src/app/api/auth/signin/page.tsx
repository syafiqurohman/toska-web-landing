'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const DynamicLogin = dynamic(() => import('../../../../components/login/login'))

const login = () => {
  return <DynamicLogin />
}

export default login
