import React, { useState, useEffect } from 'react';
import '../scss/component/Header.scss';
import logo from '../images/logo.png';
import { auth } from '../firebase'; // Import Firebase authentication instance

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isLog,setIslog] = useState(localStorage.getItem('isLog'))
  const [user, setUser] = useState();

  const [_user,_setUser] = useState(auth.currentUser); // Lấy thông tin người dùng hiện tại
  const navigate = useNavigate()
  console.log(user)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // setIslog(localStorage.getItem('isLog'))
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    setUser(()=>{
      const displayName = localStorage.getItem('user');
      const displayNameNew = displayName.replace(/"/g, '');
      return displayNameNew
    })
  },[])
  // useEffect(()=>{
  //   if(isLog !== 'true')
  //   {
  //     navigate('/login')
  //   }
  // },[])
  const handleLogout = ()=>{
    localStorage.setItem('isLog',false); 
    setIslog(false);
    navigate('/login')
  }
  return (
    <div className='Header'>
      <div style={{ width: '76%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img className='logo' style={{ width: '110px', height: '100px', marginRight: '40px' }} alt='' src={logo} />
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
          {isMobileView && (
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>
          )}
          <a href="/about">Về chúng tôi</a>
          {/* <div className="dropdown">
            <button className="dropbtn">Nội dung</button>
            <div className="dropdown-content">
              <a href="/dao-duc-trong-kinh-doanh">Đạo đức trong kinh doanh</a>
              <a href="/tinh-huong-kho-xu-ve-dao-duc">Tình huống khó xử về đạo đức</a>
              <a href="/cau-chuyen-thuc-te">Câu chuyện  thực tế</a>
            </div>
          </div> */}
          <a href="/tracuu">Tra cứu điểm chuẩn</a>
          {/* <a href="/phodiem">Phổ điểm</a> */}
          <a href="/newslist">Tin tức tuyển sinh</a>
          {
            isLog === 'true'
            ? <div style={{marginLeft:'150px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img style={{width:'50px',height:'50px',backgroundColor:'white',borderRadius:'50%'}} alt='' src={logo}/>
                <p style={{marginLeft:'10px'}} className='dropdown'>Xin chào: {user}  
                  <div className="dropdown-content">
                    <a href="/settings">Settings</a>
                    <p onClick={handleLogout}>Logout</p>
                  </div>
                </p>

              </div>
            : 
            <div>
              <a href="/register">Đăng ký</a>
              <a href="/login">Đăng nhập</a>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
