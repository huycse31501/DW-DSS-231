import React from 'react';
import '../scss/component/Register.scss'
const Register = () => {
    return (
        <div className='Register'>
            <form className='form-login'>
                <div className='text'>
                    <h1>Đăng nhập</h1>
                </div>
                <div className='form-infor'>
                    <p>Tài khoản</p>
                    <input placeholder='Your account'/>
                    <p>Mật khẩu</p>
                    <input placeholder='Your password'/>
                    <p>Nhập lại mật khẩu</p>
                    <input placeholder='Re-enter Your password'/>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <a href='/reset'>Quên mật khẩu ?</a>
                    </div>
                    <button>Đăng nhập</button>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <p>Bạn đã có tài khoản ? <span><a href='/login' style={{color:'blue'}}>Đăng nhập ngay ?</a></span></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;