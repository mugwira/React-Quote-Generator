import React from 'react'
import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().required
});
function UserValidation() {
    return (
        <div>
            
        </div>
    )
}

export default UserValidation
