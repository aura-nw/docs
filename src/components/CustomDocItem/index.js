import React, { useEffect } from 'react';
import ActualDocItem from '@theme/DocItem';
import styles from './styles.module.scss';
import CustomFooter from '../CustomFooter';


const CustomDocItem = props => {
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const cells = table.querySelectorAll('td');
      cells.forEach(cell => {
        const codeBlocks = cell.querySelectorAll('code');
        codeBlocks.forEach(codeBlock => {
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/_/g, '_<wbr>');
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/\./g, '.<wbr>');
          console.log(codeBlock.innerHTML);
        });
      });
    });
    }
  )

  return (
    <div
    className={
      props.location.pathname === `/docs/latest/index/`
        ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
        : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
    }
    >
    <ActualDocItem {...props} />
      <div className={styles['custom_doc_item_footer']}>
        <CustomFooter/>
      </div>
    </div>
  );
};

export default CustomDocItem;