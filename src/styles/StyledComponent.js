import styled, {css} from "styled-components";


const Box = styled.div`
    /* props로 넣어준 값을 직접 전달해줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display:flex;
`;

const Button = styled.button`
    background:white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }



${props =>
    props.inverted &&
    css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
        background: white;
        color: black;
        }
    `};
    & + button {
    margin-left : 1rem;
    }
`;

const Sample = ({className})=> <div className={className}>샘플자료</div>;
const StyledSample = styled( Sample )`
    font-size: 2rem;
    background-color: magenta;
`;

export const StyledComponent=()=>(
    <>
    <Box color={'black'}>
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
    <Box>
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
    <Box color='green'/>
        <Sample/>
        <StyledSample/>
    </>
)


// `hello ${{foo: 'bar' }} ${()=>'world'}!`
function tagged(...args) { console.log( args ); }
tagged `hello ${{foo: 'bar' }} ${()=>'world'}!`