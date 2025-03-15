// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // ✅ Import navigation
// import './Dashboard.css';


// const Dashboard = () => {
//     const { username } = useParams(); // ✅ Get username from URL
//     const [authUser, setAuthUser] = useState("");
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate(); // ✅ Initialize navigation

//     useEffect(() => {
//         // ✅ Fetch the authenticated user's details
//         fetch("http://localhost:5000/api/auth/dashboard", {
//             method: "GET",
//             credentials: "include"
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.username) {
//                 setAuthUser(data.username);

//                 // ✅ If the URL username is different, redirect to the correct dashboard
//                 if (data.username !== username) {
//                     navigate(`/dashboard/${data.username}`);
//                 }
//             } else {
//                 navigate("/"); // Redirect to login if unauthorized
//             }
//         })
//         .catch(err => console.error("Error:", err));
//     }, [username, navigate]);

//     return (
//         <div>
//             <h2>Welcome, {authUser}!</h2>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default Dashboard;


import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className="Dashboard-narbar">
                
            </div>
        
        </>
    )
}