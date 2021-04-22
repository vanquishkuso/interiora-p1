import styled from 'styled-components';
import { Link } from 'gatsby';

export const LinkButton = styled(Link)`
    background: ${({ primary }) => (primary ? '#877D70' : '#373737')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({ primary }) => (primary ? '#373737' : '#877D70')};
        transform: translateY(-2px);
    }
`