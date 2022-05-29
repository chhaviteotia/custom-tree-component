import React from 'react';
import Tree from './Tree';
import 'bootstrap/dist/css/bootstrap.css';
import './Tree.css';


const TreeList=()=>{
    const data = [
        {
            "title": "Item 1",
            "items": [
                {
                    "title": "Item 1.1",
                    "items": [
                        {
                            "title": "1.1.1",
                            "items": []
                        },
                        {
                            "title": "1.1.2",
                            "items": []
                        }
                    ]
                },
                {
                    "title": "Item 1.2",
                    "items": [
                        {
                            "title": "1.2.1",
                            "items": []
                        }
                    ]
                }
            ]
        },
        {
            "title": "Item 2",
            "items": [
                {
                    "title": "2.1",
                    "items": []
                },
                {
                    "title": "2.2",
                    "items": []
                }
            ]
        },
        {
            "title": "Item 3",
            "items": [
                {
                    "title": "3.1",
                    "items": []
                },
                {
                    "title": "3.2",
                    "items": [
                        {
                            "title": "3.2.1",
                            "items": []
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <div className='tree-list-conatiner'>
            <Tree data={data}/>
        
        </div>
    )
}

export default TreeList