"use client"
export default function FilterError({error}){
    return(
        <>
        <h2>Error occured!</h2>
        <p>Invalid Path :{error.message}</p>
        </>
    )
}