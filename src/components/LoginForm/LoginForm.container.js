import { connect } from 'react-redux';
import LoginForm from './';
import { login } from './LoginForm.action';


const mapStateToProps = (state) => {
    return {
        loading: state.loginReducer.loading,
        data: state.loginReducer.data,
        error: state.loginReducer.error
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps)(LoginForm)