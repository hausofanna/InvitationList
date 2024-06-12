import styled from 'styled-components';

export const Content = styled.div`
    display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    padding: 0.25em 1em;
    margin: 1em 0.25em;
`;