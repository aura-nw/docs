import React, { Fragment, useState } from 'react';
import { CopyIcon, CheckMarkIcon } from '../icons';

export const JsonListTable = ({ items, copyButton = [] }) => {
    if (!items || typeof items !== "object") {
      return null;
    }
  
    const [copied, setCopied] = useState({});
  
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied((prev) => ({ ...prev, [text]: true }));
        setTimeout(() => {
          setCopied((prev) => ({ ...prev, [text]: false }));
        }, 1000);
      });
    };
  
    return (
      <Fragment>
        <table>
          <tbody>
            {Object.keys(items).map((key, i) => (
              <tr key={i}>
                <td>{key}</td>
                <td>
                  {Array.isArray(items[key]) && items[key].map((item, j) => (
                        <div key={j}>
                            {(copyButton[1].includes(1) && copyButton[0].includes(i)) ? (
                                copied[item] ? (
                                    <span>
                                        <CheckMarkIcon />
                                        &nbsp;
                                    </span>
                                ) : (
                                    <span onClick={() => handleCopy(item)} disabled={copied[item]} style={{ cursor: "pointer" }}>
                                        <CopyIcon />
                                        &nbsp;
                                    </span>
                                )
                            ) : ("")}
                            {
                            (typeof item === "string" && item.startsWith("http")) ? (
                                <a href={item}>{item}</a>
                            ) : (
                                <span>{item}</span>
                            )
                            }
                      </div>
                    ))
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  };
  