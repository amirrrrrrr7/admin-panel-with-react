import {Form} from 'antd'
import {Text, Submit} from '../utils/Field'

function New() {

    function submit(values) {
        console.log(values)
    }

    return (
        <div>
            <Form name="person" onFinish={submit}>

                <Text label="نام" name={'name'} requied={true} placeholder={'name'}/>
                <Text label="نام کاربری" name={'username'} requied={true} placeholder={'username'}/>
                <Submit label="ذخیره" />

            </Form>
        </div>
    )
}

export default New