import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotFound as NotFoundData } from '../../../data.json';
import { ImSad2 } from 'react-icons/im';

const NotFound = () => {
    const nav = useNavigate();
  return (
        <div className='not_found'>
            {NotFoundData.title}
            <Button className='button' onClick={()=>nav('/')}>
                {NotFoundData.description}
            </Button>
            <ImSad2/>
        </div>

    )
}

export default NotFound