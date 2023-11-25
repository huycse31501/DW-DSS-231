import React, {useState} from 'react';
import '../scss/component/Register.scss'
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const navigate = useNavigate()
    const handleSignUp = async (e) => {
        e.preventDefault();
        if(repassword ==='')
        {
            alert('Vui lập nhập lại mật khẩu')
        }
        if(password !== repassword)
        {
            alert('Mật khẩu không đúng')
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          // Đăng ký thành công, userCredential.user chứa thông tin người dùng đã đăng ký
          console.log('Đăng ký thành công!', userCredential.user);
          alert('Đăng ký thành công!');

          navigate('/login')
        } catch (error) {
          console.error('Lỗi đăng ký:', error.message);
          alert('Lỗi đăng ký: ' + error)
        }
      };
    return (
        <div className='Register'>
            <form className='form-login'>
                <div className='text'>
                    <h1>Đăng nhập</h1>
                </div>
                <div className='form-infor'>
                    <p>Tài khoản</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <p>Mật khẩu</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <p>Nhập lại mật khẩu</p>
                    <input type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)}  placeholder='Re-enter Your password'/>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <a href='/reset'>Quên mật khẩu ?</a>
                    </div>
                    <button onClick={handleSignUp}>Đăng ký</button>
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <p>Bạn đã có tài khoản ? <span><a href='/login' style={{color:'blue'}}>Đăng nhập ngay ?</a></span></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;