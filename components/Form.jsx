"use client"

import React, { useState } from 'react'

const Form = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullName,
                email,
                message,
            }),
        })

        const { msg, success } = await res.json();
        setError(msg)
        setSuccess(success)

        if (success) {
            setFullName("")
            setEmail("")
            setMessage("")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='py-4 mt-4 border-t flex flex-col gap-5'>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input onChange={e => setFullName(e.target.value)}
                        value={fullName}
                        type="text"
                        id='fullname'
                        placeholder='Silahkan Masukkan Nama Lengkap Anda' />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        id='email'
                        placeholder='Masukkan Email Anda' />
                </div>

                <div>
                    <label htmlFor="message">Keluhan</label>
                    <textarea onChange={e => setMessage(e.target.value)}
                        value={message}
                        className='h-32'
                        id="message"
                        placeholder='Silahkan diisi...'></textarea>
                </div>

                <button className='bg-green-700 rounded-full p-3 text-white font-bold' type='submit'>Send</button>
            </form>

            <div className='bg-slate-100 flex flex-col'>
                {
                    error && error.map(e => <div className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`}>{e}</div>)}
            </div>
        </>
    )
}

export default Form