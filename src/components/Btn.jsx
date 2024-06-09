import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({text='click me', to='', ct_className=''}) => {
  return (
    <Link className={`${ct_className} bg-gradient-to-r from-[#3E92CC] from-33% via-[#6978D1] via-67% to-[#945DD6] to-100% px-5 py-2 rounded-s-full rounded-e-full hover:bg-gradient-to-l transition-all`} to={to}>{text}</Link>
  )
}

export default Btn
