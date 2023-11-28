import React, { useState, useEffect } from 'react';
import { auth, firestore,doc,getDoc } from '../firebase'; // Import Firestore và Firebase auth từ file firebase của bạn
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {

        fetchUserData(user.uid,);
      } else {
        navigate('/login'); // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe khi unmount component
    };
  }, [navigate]);

  const fetchUserData = async (userId) => {
    try {
      const userRef = doc(firestore, 'users', userId);
      const docUser = await getDoc(userRef)
      if (docUser.exists) {
        setUserData(docUser.data());
        console.log(docUser)
      } else {
        console.log('Không tìm thấy thông tin người dùng');
      }
    } catch (error) {
      console.error('Lỗi khi truy xuất thông tin người dùng:', error);
    }
  };

  return (
    <div className='Profile'>
      <h2>Thông tin người dùng</h2>
      {userData ? (
        <div className='form-profile'>
            <p>Tên: {userData.displayName}</p>
            <input/>
            <p>Email: {userData.email}</p>
            <input/>
            <p>Ngày sinh: {userData.birthday}</p>
            <input/>
            <p>Giới tính: {userData.birthday}</p>
            <input placeholder={userData.birthday}/>

            <p>Số điện thoại: {userData.birthday}</p>
            <p>Địa chỉ: {userData.birthday}</p>
        </div>
      ) : (
        <p>Đang tải thông tin người dùng...</p>
      )}
    </div>
  );
};

export default Profile;
