import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className={'auth-wrapper vh-100'}>
                <Container className={'h-100 d-flex align-items-center justify-content-center'}>
                    <Form className={'border py-4 px-5 bg-white rounded-3'}>
                        <h2><Link to={'/'}
                                  className={'text-decoration-none text-primary text-center mb-4 w-100 d-inline-block'}>Login</Link>
                        </h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Login
                        </Button>
                        <p className={'mb-0 mt-2'}>Don't you have an account? <Link to={'/register'}
                                                                                    className={'text-primary'}>Register</Link>
                        </p>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Login;