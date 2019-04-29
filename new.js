/* eslint-disable no-console */
const fs = require('fs')
const {pascalize, depascalize} = require('humps')
const CSS = process.env.CSS !== 'false'
const TYPE = process.env.TYPE || 'component'
const NAME = process.env.NAME

if (!NAME) {
  console.error('NAME is required.')
  return
}

if (!['page', 'component'].includes(TYPE)) {
  console.error(`Unknown TYPE: ${TYPE}.`)
  return
}

const isComponent = TYPE === 'component'

const COMPONENT_NAME = pascalize(NAME)
const FILE_NAME = isComponent
  ? COMPONENT_NAME
  : depascalize(COMPONENT_NAME, {separator: '-'})

const COMPONENT_TEMPLATE = `import React, {Component} from 'react'
import cx from 'classnames'
${CSS ? `import './${FILE_NAME}.css'\n` : ''}
export default class ${COMPONENT_NAME} extends Component {
  render() {
    const {className, style, ...restProps} = this.props
    return (
      <div
        className={cx('${COMPONENT_NAME}', className)}
        {...style && {style}}
        {...restProps}
      >
        {}
      </div>
    )
  }
}
`

const CSS_TEMPLATE = `.${COMPONENT_NAME} {

}
`

const INDEX_TEMPLATE = `export {default} from './${FILE_NAME}'
`

const FILE_PATH = isComponent
  ? `./components${CSS ? `/${FILE_NAME}` : ''}`
  : './pages'

if (!fs.existsSync(FILE_PATH)) {
  fs.mkdirSync(FILE_PATH, {recursive: true})
}

const JS_PATH = `${FILE_PATH}/${FILE_NAME}.js`
const INDEX_PATH = `${FILE_PATH}/index.js`
const CSS_PATH = `${FILE_PATH}/${FILE_NAME}.css`
const callback = PATH => {
  console.log(`✅ ${PATH} created.`)
}

fs.writeFileSync(JS_PATH, COMPONENT_TEMPLATE)
callback(JS_PATH)

if (CSS) {
  fs.writeFileSync(CSS_PATH, CSS_TEMPLATE)
  callback(CSS_PATH)

  if (isComponent) {
    fs.writeFileSync(INDEX_PATH, INDEX_TEMPLATE)
    callback(INDEX_PATH)
  }
}
