//fetch from the back
//hooks are aslo called functions
import axios from 'axios';
import { useState, useEffect } from 'react';

function FetchClass() {
    const [errorloading, setErrorLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    function fetchStudent() {
        axios.get('http://localhost:8000/api/students/').then((res) => {
            if (res.data.status === 200) {
                setData(res.data.data) //updating the state
                console.log(res.data.data)
            }
            setLoading(false) //updating the state
        })
    }
    useEffect(() => {
        fetchStudent()
    }, [])
    let page_load = '';
    if (errorloading) {
        page_load = <div className='text-center'>
            <h1 className='text-danger fw-bolder fs-2 p-4'>ERROR WITH SERVER PLEASE CHECK YOUR NETWORK</h1>
        </div>
    } else {
        if (loading) {
            page_load = <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        } else {
            page_load =
                <div className='row'>
                    {data.map((item, index) => {
                        return (
                            <div className='col-4 ' key={item._id}>
                                <div className="">
                                    <div className='w-full'>
                                        <img src={`http://localhost:8000/img/students/${item.image.data}`}
                                            style={{ width: '100%', boxSizing: 'border-box', height: '300px' }} />
                                    </div>
                                    <br />
                                    <h1 className='fw-bold p-3 '>Name---  {item.firstName}</h1>
                                    <br />
                                    {/* <p className='mt-4'>{item.blognote}</p> */}

                                    <div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
        }
    }

    return (
        <div>
            <h3 className="pb-3">All Students </h3>
            <div className='container '>
            {page_load}
          </div>
        </div>
    )
}
export default FetchClass;