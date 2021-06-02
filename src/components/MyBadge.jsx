import {Badge} from 'react-bootstrap'

const MyBadge =(prop)=>
<Badge pill variant = {prop.color}>
    {/* it must be bootstrap class /}
{/ change */}
{prop.text}
</Badge>

export default MyBadge