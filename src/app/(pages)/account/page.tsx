import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>Kişisel Bilgiler</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Hesabım',
  description: 'Yeni bir hesap oluşturun veya varolan hesabınıza giriş yapın',
  openGraph: mergeOpenGraph({
    title: 'Hesabım',
    url: '/account',
  }),
}
