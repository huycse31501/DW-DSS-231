import React from 'react';
import '../scss/component/Login.scss'
const Login = () => {
    return (
        <div className='Login'>
            <form className='form-login'>
                <div className='text'>
                    <h1>Đăng nhập</h1>
                </div>
                <div className='form-infor'>
                    <p>Tài khoản</p>
                    <input placeholder='Your account'/>
                    <p>Mật khẩu</p>
                    <input placeholder='Your password'/>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <a href='#'>Quên mật khẩu ?</a>
                    </div>
                    <button>Đăng nhập</button>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <p>Bạn chưa có tài khoản ? <span><a style={{color:'blue'}}>Đăng kí ngay ?</a></span></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;