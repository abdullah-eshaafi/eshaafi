



const Breadcrumbs = (props) =>{
    return(
    <>
        {/* Content Header (Page header) */}
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">{props.active}</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="/">{props.data}</a></li>
                            <li className="breadcrumb-item active"><a href="#">{props.active}</a></li>
                        </ol>
                    </div>{/* /.col */}
                </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
    </>
    )
}



export default Breadcrumbs;