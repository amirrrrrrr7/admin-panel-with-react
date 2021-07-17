import { Result, Button } from 'antd'
import {Link} from "react-router-dom";

function NotFound() {
    return <Result
            status="404"
            title="404"
            subTitle="متاسفانه این صفحه موجود نمی باشد"
            extra={<Button type="primary"><Link to="/">خانه</Link></Button>}
           />
}

export default NotFound