import React, { Fragment } from 'react';
import '../../pages/index.css'

const Card = ({item}) => {
    return (
        <div className='aura-doc-card' onClick={() => window.location.href=item.link}>
            <div>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
                {Boolean(item.linkText) && (
                    <a 
                        href={item.link} 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >{item.linkText} <span>🡪</span></a>
                )}               
            </div>
        </div>
    )
};

export const DocsCards = ({itemsList}) => {
    return (
        <Fragment>
            <br/>
            {   
                itemsList.map((items, listIndex) => (
                    <div className='spotlight' key={listIndex} style={{marginTop: "45px", background: "transparent"}}>
                        {
                            items.map((item, index) => (
                                <Card item={item} key={index}/>
                            ))
                        }
                    </div>
                ))
            }
        </Fragment>
    )
};
