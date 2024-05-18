import React, { useState } from 'react';
import Account from '../../components/account/Account';
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo } from '../../redux/authSlice';
import { putProfile } from '../../redux/comAPI';

const User = () => {

    const firstName = useSelector(state => state.auth.user?.firstName);
    const lastName = useSelector(state => state.auth.user?.lastName);
    const userName = useSelector(state => state.auth.user?.userName);
    const token = useSelector(state => state.auth.token);

    const [newUserName, setnewUserName] = useState(userName);
    const [edit, setEdit] = useState(false);

    const dispatch = useDispatch();


    const handleEditUser = async (e) => {
        e.preventDefault();
        try{
            const userInfo = await putProfile(newUserName, token);
            console.log("userInfo in user : ", userInfo);
            dispatch(addUserInfo(userInfo));
            setEdit(prev => !prev);
        }
        catch(error){
            console.log("erreur lors de la demande de changement d'username : ", error)
        }
    }


    const handleEditMode = () => {
        setnewUserName(userName);
        setEdit(prev => !prev);
    }


    return (
        <main className="main bg-dark">
            <div className="header">
                {
                    !edit ?
                        <>
                            <h1>Welcome back<br />{firstName} {lastName}</h1>
                            <button className="edit-button" onClick={handleEditMode}>Edit Username</button>
                        </>
                        :
                        <>
                            <h1>Choose your username</h1>
                            <form>
                                <input type="text" id="username" value={newUserName} onChange={e => setnewUserName(e.target.value)} />
                                <div className='edit-form-button-container'>
                                    <button type="submit" className="edit-button" onClick={handleEditUser}>Confirm</button>
                                    <button type="submit" className="edit-button" onClick={handleEditMode}>Cancel</button>
                                </div>
                            </form>
                        </>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                aDesc="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                aDesc="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                aDesc="Current Balance"
            />
        </main>
    );
};

export default User;