import React from 'react';
import ReactSVG from 'react-svg';
import styled, { withTheme } from 'styled-components';

import { Theme } from '../../../themes/commons';

interface Props {
    icon: string;
    url: string;
    theme: Theme;
}

const IconContainer = styled.div`
    align-items: center;
    background-color: ${props => (props.color ? props.color : 'transparent')};
    display: 'inline-flex';
    border-radius: 50%;
    cursor: pointer;
    height: 24px;
    justify-content: center;
    width: 24px;
`;

const SocialIconContainer = (props: Props) => {
    const { url, icon, ...restProps } = props;
    const iconSrc = `assets/social/${icon}.svg`;

    const Icon = <ReactSVG src={iconSrc as string} />;
    const openSocial = () => {
        window.open(url);
    };

    return (
        <IconContainer color={'white'} onClick={openSocial} {...restProps}>
            {Icon}
        </IconContainer>
    );
};

const SocialIcon = withTheme(SocialIconContainer);

export { SocialIcon };