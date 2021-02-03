import React from 'react';
import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';

const Section = styled.section`
    width: 350px;
    margin: 0 auto;
    padding-top: 40px;
`;

function Layout({children}) {
    return (
        <Section>
            {children}
        </Section>
    )
}

Layout.propTypes = {
    children: PropTypes.arrayOf(object),
}

export default Layout;