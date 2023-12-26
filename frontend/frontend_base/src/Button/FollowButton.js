import React from 'react';

let FollowButton = (props)=>{
    return (
        <>
        <button className={props.className} onClick={props.onClick}>{props.FollowButtonState}</button>
        </>
    )
}
export default FollowButton;