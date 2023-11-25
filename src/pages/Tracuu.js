import React,{useState} from 'react';
import '../scss/pages/Tracuu.scss'
import data from '../json/diemchuan.json'
import { Pagination } from 'antd';

const Tracuu = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 25;
    const [searchNganh, setSearchNganh] = useState('');
    const [searchDiem, setSearchDiem] = useState('');
    const [searchValue, setSearchValue] = useState('');

    // Tính chỉ số của record đầu tiên và cuối cùng trên từng trang
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const filteredData = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchNganh.toLowerCase()) &&
          item.grade.toString().includes(searchDiem) &&
          Object.values(item).some(
            (value) =>
              typeof value === 'string' &&
              (value.toLowerCase().includes(searchValue.toLowerCase()) || item.grade?.toString().includes(searchValue))

          )
        );
      });
    const sortedFilteredData = filteredData.sort((a, b) => {
        const aName = a.name?.toLowerCase();
        const bName = b.name?.toLowerCase();
        const aGrade = a.grade?.toString();
        const bGrade = b.grade?.toString();
        const aSubject = a.subject?.toLowerCase();
        const bSubject = b.subject?.toLowerCase();
        const aType = a.type?.toLowerCase();
        const bType = b.type?.toLowerCase();
    
        if (
            aName?.includes(searchValue.toLowerCase()) &&
            bName?.includes(searchValue.toLowerCase())
            ) {
            if (
                aName.indexOf(searchValue.toLowerCase()) <
                bName.indexOf(searchValue.toLowerCase())
            )
                return -1;
            if (
                aName.indexOf(searchValue.toLowerCase()) >
                bName.indexOf(searchValue.toLowerCase())
            )
                return 1;
        } else if (aName?.includes(searchValue.toLowerCase())) {
          return -1;
        } else if (bName?.includes(searchValue.toLowerCase())) {
          return 1;
        } else if (
          aGrade?.includes(searchValue) &&
          bGrade?.includes(searchValue)
        ) {
            if (
                aGrade.indexOf(searchValue) <
                bGrade.indexOf(searchValue)
            )
            return -1;
          if (
            aGrade.indexOf(searchValue) >
            bGrade.indexOf(searchValue)
          )
            return 1;
        } else if (aGrade?.includes(searchValue)) {
          return -1;
        } else if (bGrade?.includes(searchValue)) {
          return 1;
        } else if (
          aSubject?.includes(searchValue.toLowerCase()) &&
          bSubject?.includes(searchValue.toLowerCase())
        ) {
          if (
            aSubject.indexOf(searchValue.toLowerCase()) <
            bSubject.indexOf(searchValue.toLowerCase())
          )
            return -1;
          if (
            aSubject.indexOf(searchValue.toLowerCase()) >
            bSubject.indexOf(searchValue.toLowerCase())
          )
            return 1;
        } else if (aSubject?.includes(searchValue.toLowerCase())) {
          return -1;
        } else if (bSubject?.includes(searchValue.toLowerCase())) {
          return 1;
        } else if (
          aType?.includes(searchValue.toLowerCase()) &&
          bType?.includes(searchValue.toLowerCase())
        ) {
          if (
            aType.indexOf(searchValue.toLowerCase()) <
            bType.indexOf(searchValue.toLowerCase())
          )
            return -1;
          if (
            aType.indexOf(searchValue.toLowerCase()) >
            bType.indexOf(searchValue.toLowerCase())
          )
            return 1;
        } else if (aType?.includes(searchValue.toLowerCase())) {
          return -1;
        } else if (bType?.includes(searchValue.toLowerCase())) {
          return 1;
        }
    
        return 0;
      });
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(sortedFilteredData.length / recordsPerPage);

    // Hàm thay đổi trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const handleNganhSearch = (e) => {
        setSearchNganh(e.target.value);
        setCurrentPage(1);
    };

    const handleDiemSearch = (e) => {
        setSearchDiem(e.target.value);
        setCurrentPage(1);
    };
    const handleSearchAll = (e) => {
        setSearchValue(e.target.value);
        setCurrentPage(1);
      };
    return (
        <div className='Tracuu'>
            <div className='list-menu'>
                <input className='school-filter' placeholder='Ngành' value={searchNganh} onChange={handleNganhSearch}/>
                <input className='grade-filter' placeholder='Điểm'value={searchDiem} onChange={handleDiemSearch}/>
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

                <input className='search' placeholder='Search' value={searchValue} onChange={handleSearchAll}/>
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
                            <td>{index + indexOfFirstRecord + 1}</td>
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
                total={sortedFilteredData.length}
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