import { useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider.js"
const useAuth = () => {

    const auth = useContext(AuthContext);
    return auth;

};

export default useAuth;