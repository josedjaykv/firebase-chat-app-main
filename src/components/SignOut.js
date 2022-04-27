import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
