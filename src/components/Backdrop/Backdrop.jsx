import './Backdrop.css'

const Backdrop = (props) =>{
    if(props.show){
        return <div className='backdrop' onClick={props.close}></div>
    }else return null
}

export default Backdrop;