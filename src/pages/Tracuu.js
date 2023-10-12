import React from 'react';
import '../scss/pages/Tracuu.scss'
const Tracuu = () => {
    return (
        <div className='Tracuu'>
            <div className='list-menu'>
                <button className='school-filter'>Trường</button>
                <button className='grade-filter'>Điểm</button>
                <button className='year-filter'>Năm</button>
                <input className='search' placeholder='Search'/>
            </div>
            <table className='grade-table'>
                <tr>
                    <th>STT</th>
                    <th>Mã ngành</th>
                    <th>Tên ngành</th>
                    <th>Tổ hợp môn</th>
                    <th>Điểm chuẩn</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>7860100</td>
                    <td>Nghiệp vụ An ninh</td>
                    <td>A00; A01; C03; D01</td>
                    <td>21</td>
                </tr>
            </table>
        </div>
    );
};

export default Tracuu;