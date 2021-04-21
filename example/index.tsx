/** @format */

import React, {Fragment, useEffect, useState} from 'react'
import reactdom from 'react-dom'
// import {system} from './index'
// import Name from '../build'
// declare const System: any
let Name = (props: {text: string}) => <Fragment>{props.text}</Fragment>
const App = () => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        ;(window as any).System.import('/build/index.js').then((module: any) => {
            Name = module.default
            setstate(true)
        })
    }, [])
    return (
        <div>
            <Name text={'aaa'}></Name>

            <h1>hello</h1>
        </div>
    )
}

reactdom.render(<App></App>, document.getElementById('app'))
