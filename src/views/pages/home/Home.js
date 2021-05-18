import TheNavigationBar from "../../../container/TheNavigationBar";


const Home = () => {
    return(
        <>
            <TheNavigationBar />

            <div className={"container-fluid"}>
                <a href={"/pakistan/dashboard"}>This is home page</a>
            </div>
        </>
    )
}


export default Home;