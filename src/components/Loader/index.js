import "./index.css"

const Loader = ({ isLoading, children }) => {
    return (
        <div className="loading-wrapper">

                {isLoading && <div className={isLoading ? "loading" : ""}><div className="loader"></div></div>}
                {children}
        </div>
    )
}

export default Loader
