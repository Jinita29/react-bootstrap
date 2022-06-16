import Images from "../static/Images";

const Loader = () => {
    return (
        <>
            <div className={'loader'}>
                <img src={Images.Loader} alt={'Loader'} width={35} height={35}/>
            </div>
        </>
    )
}

export default Loader;