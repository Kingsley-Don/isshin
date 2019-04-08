import React, {cloneElement} from 'react'
import NextHead from 'next/head'
import {TITLE_TEMPLATE} from '../constants/headConstants'

const replaceTitle = element => {
  if (element.type === 'title') {
    if (typeof TITLE_TEMPLATE === 'string' && TITLE_TEMPLATE.includes('%s')) {
      return cloneElement(element, {
        children: TITLE_TEMPLATE.replace('%s', element.props.children),
      })
    } else {
      console.warn('Warning: TITLE_TEMPLATE should include "%s".')
    }
  }
  return element
}

export default function Head({children}) {
  const headChildren = Array.isArray(children)
    // FIXME: hack way to set key
    ? children.map((element, index) => ({...replaceTitle(element), key: index}))
    : replaceTitle(children)
  return <NextHead>{headChildren}</NextHead>
}
