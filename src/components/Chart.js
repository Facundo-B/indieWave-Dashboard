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
        console.log(apiProducts);
        setProductList(apiProducts.data)
      })()
    }, [page])

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }
    console.log(productList)
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                       {/* hacer iteracion x cantidad de prod */}
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
                        <tfoot>
                            <tr>
                            <th>
                                <button onClick={nextPage}>Siguiente</button>
                                <button onClick={previousPage}>Anterior</button>
                            </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;