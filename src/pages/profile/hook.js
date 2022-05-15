import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CREATE_PROFILE } from '../../constants/routes';

export const Hook = () => {

    const navigate = useNavigate();
    const { userName } = useSelector(state => state.profileForm);

    const clearData = () => {
        localStorage.clear();
        navigate(CREATE_PROFILE);
    }

    return [
        userName,

        clearData
    ]
}