import React from 'react';
import ReactDOM from "react-dom";
import * as d3 from "d3";
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export interface ScatterplotProps {
    /**
     * Optional click handler
     */
    onClick?: () => void;
}


/**
 * Primary UI component for user interaction
 */
 const Scatterplot: React.FC<ScatterplotProps> = ({...props}) => {
    return (
        <Button {...props}>
                huhu
        </Button>
    );
};
export default Scatterplot;