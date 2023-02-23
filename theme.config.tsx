import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'


const config: DocsThemeConfig = {
  logo: (
      <img src="/abc-logo.svg"/>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ABC Developer'
      }
    }
  },
  head: (
      <link rel="shortcut icon" href="/favicon.ico" />
  ),
  banner: {
      key: 'beta-release',
      text: '🎉 Welcome to beta release.',
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
    labels: ''
  },
  footer: {
    text: <span>
       <a href="https://ascendbit.com" target="_blank">AscendBit Company Limited</a> © {new Date().getFullYear()} 
    </span>
  }
}


export default config