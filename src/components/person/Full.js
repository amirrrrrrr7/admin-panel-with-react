import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col} from 'antd';
import axios from 'axios';
import { getPerson } from '../../redux/actions/person'

function Full() {
    const {id} = useParams()
    // const [item, setItem] = useState({})
    const item = useSelector(state => state.person)
    const dispatch = useDispatch()

    useEffect(() => {
        // axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(result => setItem(result.data))

        dispatch(getPerson(id))
    },[id])

    return (
        <div>
            <Row>
                <Col span="4">شناسه: </Col>
                <Col span="20">{item.id}</Col>
            </Row>
            <Row>
                <Col span="4">نام: </Col>
                <Col span="20">{item.name}</Col>
            </Row>
            <Row>
                <Col span="4">نام کاربری: </Col>
                <Col span="20">{item.username}</Col>
            </Row>
            <Row>
                <Col span="4">ایمیل: </Col>
                <Col span="20">{item.email}</Col>
            </Row>
            <Row>
                <Link to="/person">بازگشت به لیست کاربران</Link>
            </Row>
        </div>
    )
}

export default Full