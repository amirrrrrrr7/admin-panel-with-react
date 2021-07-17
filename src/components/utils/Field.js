import {Button, Form, Input} from "antd";

export function Text({label, name, required, type, placeholder}) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{type , required, message: ` فیلد ${label} اجباری است!` }]}
        >
            <Input placeholder={placeholder}/>
        </Form.Item>
    )
}

export function Submit({label}) {
    return (
        <Form.Item>
            <Button type="primary" htmlType="submit">
                {label}
            </Button>
        </Form.Item>
    )
}