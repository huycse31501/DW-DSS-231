import React,{useState} from 'react';
import '../scss/pages/Tracuu.scss'
import data from '../json/diemchuan.json'
import { Pagination } from 'antd';

const Tracuu = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 25;

    // Tính chỉ số của record đầu tiên và cuối cùng trên từng trang
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    
    const totalPages = Math.ceil(data.length / recordsPerPage);

    // Hàm thay đổi trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='Tracuu'>
            <div className='list-menu'>
                <input className='school-filter' placeholder='Ngành'/>
                <input className='grade-filter' placeholder='Điểm'/>
                <div className='dropdown'>
                    <button className='dropbtn'>Năm</button>
                    <div className='dropdown-content'>
                        <a href='#'>2018</a>
                        <a href='#'>2019</a>
                        <a href='#'>2020</a>
                        <a href='#'>2021</a>
                        <a href='#'>2022</a>
                        <a href='#'>2023</a>
                    </div>
                </div>
                {/* <button className='year-filter'>Năm</button> */}
                <div className='dropdown'>
                    <button className='dropbtn'>Hệ</button>
                    <div className='dropdown-content'>
                        <a href='#'>Chính quy - đại trà</a>
                        <a href='#'>Chất lượng cao</a>
                        <a href='#'>Việt - Pháp</a>
                    </div>
                </div>

                <input className='search' placeholder='Search'/>
            </div>
            <table className='grade-table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã ngành</th>
                        <th>Tên ngành</th>
                        <th>Tổ hợp môn</th>
                        <th>Điểm chuẩn</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRecords.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.subject}</td>
                            <td>{item.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                style={{marginBottom:'30px'}}
                className='pagination'
                current={currentPage}
                pageSize={recordsPerPage}
                total={data.length}
                onChange={handlePageChange}
                // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={['25']}
                defaultPageSize={recordsPerPage}
                // total={totalPages}
            />
        </div>
    );
};

export default Tracuu;