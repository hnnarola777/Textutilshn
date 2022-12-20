import React from 'react'

function Alert(props) {
    const cap =(word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();
    } 
  return (
    props.alert &&
    <div>
        <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
            {cap(props.alert.msg)} : {props.alert.type}
         
            </div>
    </div>
  )
}

export default Alert