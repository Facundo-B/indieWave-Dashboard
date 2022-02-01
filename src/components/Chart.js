import React, {useEffect, useState} from 'react';
import ChartRow from './ChartRow';



function Chart (){
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(0);
    

    const indieWave = 'http://localhost:3000'

    useEffect( function () {
      (async () => {
        let apiProducts = await fetch(`${indieWave}/api/products?page=${page}`)
        apiProducts = await apiProducts.json();
        setProductList(apiProducts.data)
      })()
    }, [page])

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        if(page >= 4 ){
            setPage(page);
        }else{
            setPage(page + 1);
        }
    }
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productList.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                        
                    </table>
                    <tfoot>
                        <tr>
                            <th> 
                                <button className='background-thistle' onClick={previousPage}>Anterior</button>
                            </th>
                            <th>
                                <button className='background-thistle'onClick={nextPage}>Siguiente</button>
                            </th>
                        </tr>
                    </tfoot> 
                </div>
            </div>
        </div>
    )
}

export default Chart;