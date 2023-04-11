import React from 'react';
import ReactDOM from 'react-dom';


const forgotPassword =({loginUser}) => {
    const history = useHistory();
    const {userEmail} = userParams();

    return (
        <div>   
            <Title>
                Reset Password
            </Title>
            <Formik
            
            initialValues={{
                email: userEmail,
                redirectUrl:"http://localhost:3000/passwordreset"
            }}
            validatationSchema={Yup.object({
                email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            
            ></Formik>
        </div>
    )
}
   