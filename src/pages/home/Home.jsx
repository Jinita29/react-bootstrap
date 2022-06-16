import '../../assets/scss/component/home.scss';
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <section className={'pt-3'}>
                <Container>
                    <h3>
                        <h2 className={'fs-1'}>Hello !!</h2> Welcome to the Home page
                    </h3>
                    <p className={'desc-text mb-0'}>Description</p>
                </Container>
            </section>
        </>
    )
}

export default Home;