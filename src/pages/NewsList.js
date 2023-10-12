import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore, collection, getDocs } from '../firebase';
import '../scss/pages/NewsList.scss'
const NewsList = () => {
  const [documents, setDocuments] = useState([]);
  console.log(documents)
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'documents'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title, // Lấy tiêu đề từ dữ liệu Firestore
        background: doc.data().background // Lấy URL của ảnh nền từ dữ liệu Firestore
      }));
      setDocuments(data);
    };

    fetchData();
  }, []);

  return (
    <div className='NewsList'>
      {documents.length
      ? <h1 style={{borderBottom:'1px solid black'}}>Danh sách các báo: </h1>
      : <h1>Chưa có tin tức nào</h1>
       }
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <Link className='infor' style={{display:'flex',flexDirection:'column'}} to={`/documents/${doc.id}`}>
              {doc.background && <img className='picture' src={doc.background} alt="Ảnh nền" />}
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
