import React, { useEffect } from 'react'
import ApiItem from '@theme/ApiItem'
import styles from './styles.module.scss'
import CustomFooter from '../CustomFooter'
import ReactDOM from 'react-dom'

const CustomDocItem = (props) => {
    useEffect(() => {
        const tables = document.querySelectorAll('table')
        tables.forEach((table) => {
            const cells = table.querySelectorAll('td')
            cells.forEach((cell) => {
                const codeBlocks = cell.querySelectorAll('code')
                codeBlocks.forEach((codeBlock) => {
                    codeBlock.innerHTML = codeBlock.innerHTML.replace(/_/g, '_<wbr>')
                    codeBlock.innerHTML = codeBlock.innerHTML.replace(/\./g, '.<wbr>')
                    console.log(codeBlock.innerHTML)
                })
            })
        })
    })

    useEffect(() => {
        ReactDOM.render(<CustomFooter />, document.getElementsByClassName('footer')[0])
    }, [])

    return (
        <div
            className={
                props.location.pathname === `/docs/latest/index/`
                    ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
                    : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
            }>
            <ApiItem {...props} />
        </div>
    )
}

export default CustomDocItem
