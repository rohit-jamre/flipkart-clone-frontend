
import {ButtonGroup,styled,Button} from '@mui/material';
const Component =styled(ButtonGroup)`
margin-top:30px;


`;
const StyleButton =styled(Button)`
color:#000;
border-radius:50%;

`

const GroupedButton =() =>{
    return(
        < Component>
            <StyleButton>-</StyleButton>
            <Button disabled>1</Button>
            <StyleButton>+</StyleButton>
            
        </ Component>
    )
}
export default GroupedButton;